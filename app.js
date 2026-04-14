class App {
    constructor() {
        this.root = document.getElementById('app-root');
        this.nav = document.getElementById('sidebar-nav');
        this.roleSelect = document.getElementById('role-select');
        this.pageTitle = document.getElementById('page-title');
        
        // Define translation helper
        window.t = (key) => {
            if (!window.locales) return key;
            const langDict = window.locales[state.lang] || window.locales['en'];
            return langDict[key] || key;
        };

        this.init();
    }

    init() {
        this.initEventListeners();
        this.updateStaticTranslations();
        this.renderNav();
        this.navigate(state.role === 'student' ? 'dashboard' : 'caseCreator');
        this.updateHeaderProfile();
    }

    initEventListeners() {
        this.roleSelect.addEventListener('change', (e) => {
            state.role = e.target.value;
            this.renderNav();
            // Switch to default view for role
            this.navigate(state.role === 'student' ? 'dashboard' : 'caseCreator');
            this.updateHeaderProfile();
        });

        document.getElementById('nav-think-first').addEventListener('click', (e) => {
            e.preventDefault();
            this.navigate('thinkFirst');
        });

        const langSelect = document.getElementById('lang-select');
        if (langSelect) {
            langSelect.value = state.lang;
            langSelect.addEventListener('change', (e) => {
                state.lang = e.target.value;
                this.updateStaticTranslations();
                this.renderNav();
                this.navigate(state.currentView);
            });
        }
    }

    updateStaticTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) {
                el.innerHTML = window.t(key);
            }
        });
    }

    updateHeaderProfile() {
        const headerAvatar = document.getElementById('header-avatar');
        const headerUsername = document.getElementById('header-username');
        
        if (state.role === 'student') {
            headerAvatar.textContent = state.student.avatar;
            headerUsername.textContent = state.student.name;
        } else {
            headerAvatar.textContent = 'ED';
            headerAvatar.style.background = 'var(--secondary)';
            headerUsername.textContent = 'Educator Tran';
        }
    }

    renderNav() {
        this.nav.innerHTML = '';
        const items = navigation[state.role];
        
        items.forEach(nav => {
            const a = document.createElement('a');
            a.href = '#';
            a.classList.add('nav-item');
            a.dataset.view = nav.id;
            if (nav.id === state.currentView) {
                a.classList.add('active');
            }
            a.innerHTML = `
                <span class="icon">${nav.icon}</span>
${window.t(nav.labelKey)}
            `;
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigate(nav.id);
            });
            
            this.nav.appendChild(a);
        });
    }

    navigate(viewId) {
        state.currentView = viewId;
        
        // Update active nav item
        document.querySelectorAll('.nav-item').forEach(el => {
            if (el.dataset.view === viewId) el.classList.add('active');
            else el.classList.remove('active');
        });

        // Special case for 'thinkFirst' since it's in the footer
        const thinkFirstBtn = document.getElementById('nav-think-first');
        if (viewId === 'thinkFirst') thinkFirstBtn.classList.add('active');
        else thinkFirstBtn.classList.remove('active');

        // Render view
        if (views[viewId]) {
            this.root.innerHTML = views[viewId]();
            
            // Set header title
            const matchingNav = [...navigation.student, ...navigation.educator].find(n => n.id === viewId);
            this.pageTitle.textContent = matchingNav ? window.t(matchingNav.labelKey) : 
                (viewId === 'thinkFirst' ? window.t('tf.title') : window.t('dashboard.title'));

            // View-specific initializations
            if (viewId === 'lesson') this.initLessonWorkspace();
            if (viewId === 'reflection') this.renderVocabList();
            
            if (window.lucide) lucide.createIcons();
        } else {
            this.root.innerHTML = `<h2>View '${viewId}' not found.</h2>`;
        }
    }

    // --- Student Interactive Logic ---

    initLessonWorkspace() {
        this.renderLessonSteps();
    }

    renderLessonSteps() {
        const container = document.getElementById('lesson-interactive');
        if (!container) return;

        let html = '';

        if (!state.lesson.hasAttempted) {
             html += `
                <div class="locked-hint mb-6">
                    🔒 AI Hint is locked. Make your first attempt to unlock support.
                </div>
                <div class="lesson-input-area mb-6">
                    <label class="font-bold text-sm">Attempt 1: Explain the difference between Rule-Based and Machine Learning using a daily life example.</label>
                    <textarea id="attempt-input" class="lesson-input" placeholder="Type your answer here..."></textarea>
                    <button class="btn btn-primary" style="align-self: flex-start;" onclick="window.app.submitAttempt()">Submit Attempt</button>
                </div>
            `;
        } else if (state.lesson.hasAttempted && !state.lesson.hasRevised) {
            html += `
                <div class="chat-bubble bubble-user">
                    <div class="text-xs mb-1 font-bold">Your Attempt 1</div>
                    ${state.lesson.userAttempt}
                </div>
<div class="chat-bubble bubble-ai bubble-hint mt-4 mb-6">
                    <div class="text-xs mb-1 font-bold">💡 AI Hint Unlocked</div>
                    Good start! But you mentioned "Machine Learning is smarter". What makes it smarter? Does a human give it rules, or does it learn from data? Try to rewrite your answer focusing on where the rules come from.
                </div>

                <div class="lesson-input-area mb-6">
                    <label class="font-bold text-sm">Revision: Based on the hint, improve your answer.</label>
                    <textarea id="revision-input" class="lesson-input" placeholder="Based on the hint, I now think..."></textarea>
                    <button class="btn btn-primary" style="align-self: flex-start;" onclick="window.app.submitRevision()">Submit Revision</button>
                </div>
            `;
        } else if (state.lesson.hasRevised && !state.lesson.hasReflected) {
             html += `
                <div class="chat-bubble bubble-user">
                     <div class="text-xs mb-1 font-bold">Your Attempt 1</div>
                    ${state.lesson.userAttempt}
                </div>
                 <div class="chat-bubble bubble-ai bubble-hint mt-4 mb-6">
                    <div class="text-xs mb-1 font-bold">💡 AI Hint Unlocked</div>
                    Good start! But you mentioned "Machine Learning is smarter". What makes it smarter? Does a human give it rules, or does it learn from data? Try to rewrite your answer focusing on where the rules come from.
                </div>
                <div class="chat-bubble bubble-user" style="background: var(--success-light); color: var(--text-primary); border: 1px solid var(--success);">
                    <div class="text-xs mb-1 font-bold text-success">Your Revision</div>
                    ${state.lesson.userRevision}
                </div>
                
                <div class="chat-bubble bubble-ai mt-4 mb-4">
                    <div class="text-xs mb-1 font-bold text-success">✅ Great Improvement!</div>
                    You nailed it. The key difference is that ML algorithms learn rules from data, while rule-based systems are explicitly written by humans.
                </div>

                <div class="lesson-input-area mb-6" style="background: var(--primary-light); padding: 16px; border-radius: 8px;">
                    <label class="font-bold text-sm">Final Step: Reflection</label>
                    <p class="text-sm text-secondary mb-2">What misconception did you have before the hint, and how did your understanding change?</p>
                    <textarea id="reflection-input" class="lesson-input mb-3" style="min-height: 80px;" placeholder="I used to think... but now I realize..."></textarea>
                    <button class="btn btn-primary" style="align-self: flex-start;" onclick="window.app.submitReflection()">Save Reflection to Bank</button>
                </div>
             `;
} else {
             html += `
                <div class="chat-bubble bubble-user" style="background: var(--success-light); color: var(--text-primary); border: 1px solid var(--success);">
                    <div class="text-xs mb-1 font-bold text-success">Your Revision</div>
                    ${state.lesson.userRevision}
                </div>
                <div class="chat-bubble bubble-ai mt-4 mb-4">
                    <div class="text-xs mb-1 font-bold text-success">✅ Great Improvement!</div>
                    You nailed it. The key difference is that ML algorithms learn rules from data, while rule-based systems are explicitly written by humans.
                </div>
                <hr style="border-top: 1px dashed var(--border); margin: 24px 0;">
                <div style="text-align: center;">
                    <span style="font-size: 40px; display: block; margin-bottom: 16px;">🎉</span>
                    <h3 class="font-bold mb-2">Lesson Completed!</h3>
                    <p class="text-sm text-secondary mb-4">Reflection saved. You unlocked the Weekly Case in the Discussion Hub!</p>
                    <button class="btn btn-primary" onclick="window.app.switchDiscussionTab('case'); window.app.navigate('discussion')">Go to Weekly Case</button>
                </div>
             `;
        }

        container.innerHTML = html;
        if (window.lucide) lucide.createIcons();
        
        // Re-render the whole layout if it's the lesson view so the tracker on the right side updates
        if(state.currentView === 'lesson'){
            // We kind of need to update the right side panel for tracker changes manually or just re-render view.
            this.updateRightPanelTracker();
        }
    }

    updateRightPanelTracker() {
        // Find if we are in lesson layout, update the right panel HTML snippet based on new state.
        // Handled via re-navigating for simplicity since it's a prototype.
        this.navigate('lesson');
    }

    submitAttempt() {
        const text = document.getElementById('attempt-input').value;
        if (!text.trim()) {
            alert('Please enter an attempt first!');
            return;
        }
        state.lesson.userAttempt = text;
        state.lesson.hasAttempted = true;
        this.renderLessonSteps(); // Re-render central panel
    }

    submitRevision() {
        const text = document.getElementById('revision-input').value;
        if (!text.trim()) {
            alert('Please provide a revision.');
            return;
        }
        state.lesson.userRevision = text;
        state.lesson.hasRevised = true;
        this.renderLessonSteps();
    }

    submitReflection() {
        const text = document.getElementById('reflection-input').value;
        if (!text.trim()) {
            alert('Reflection is required to proceed.');
            return;
        }
        state.lesson.userReflection = text;
        state.lesson.hasReflected = true;
// Unlock the weekly case
        state.weeklyCase.isUnlocked = true;
        
        // Ensure student student object values also updates
        state.student.streak += 1;
        
        alert('Reflection saved to your Learning Bank! Concept Mastered. Weekly Case Unlocked!');
        this.renderLessonSteps();
    }

    renderVocabList() {
        const container = document.getElementById('vocab-list');
        if (!container) return;

        container.innerHTML = state.vocabBank.map(term => `
            <div style="border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 12px;">
                <h4 class="font-bold text-primary mb-1">${term.termEn} <span class="text-sm font-normal text-secondary">(${term.termVn})</span></h4>
                <p class="text-sm font-semibold mb-2">${term.def}</p>
                <div class="text-xs text-secondary" style="background: var(--bg-main); padding: 8px; border-radius: 4px;">
                    <strong>My Note:</strong> ${term.noted}
                </div>
            </div>
        `).join('');
    }

    addVocabModal() {
        const termEn = prompt("Enter English technical term:");
        if(!termEn) return;
        const termVn = prompt("Enter Vietnamese meaning:");
        const def = prompt("Enter definition:");
        const noted = prompt("Add a personal note or connection:");
        
        state.vocabBank.push({ termEn, termVn, def, noted });
        this.renderVocabList();
    }

    saveTermToJar(termEn, termVn, def) {
        // Prevent duplicates
        if (!state.vocabBank.find(t => t.termEn === termEn)) {
            state.vocabBank.push({ 
                termEn, 
                termVn, 
                def, 
                noted: 'Saved from lesson workspace.' 
            });
            alert(`"${termEn}" saved to your Reflection Jar!`);
        } else {
            alert(`"${termEn}" is already in your Reflection Jar!`);
        }
    }

    switchDiscussionTab(tabId) {
        state.discussionTab = tabId;
        if (state.currentView === 'discussion') {
            this.root.innerHTML = views.discussion();
            if (window.lucide) lucide.createIcons();
        }
    }

    submitWeeklyCase() {
        const text = document.getElementById('case-solution-input').value;
        if (!text.trim()) {
            alert('Please provide your case analysis first.');
            return;
        }
        state.weeklyCase.userSolution = text;
        state.weeklyCase.hasSubmitted = true;
        
        alert('Solution published to the Discussion Hub! You can now see earlier submissions.');
        // Re-render the discussion view to show the feed
        if (state.currentView === 'discussion') {
            this.root.innerHTML = views.discussion();
            if (window.lucide) lucide.createIcons();
        }
    }
}

// Initialize on load
window.onload = () => {
    window.app = new App();
};