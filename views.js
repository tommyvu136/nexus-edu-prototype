const views = {

    // -----------------------------------------------------
    // STUDENT VIEWS
    // -----------------------------------------------------
    dashboard: () => `
        <div class="dash-layout" style="grid-template-columns: 2fr 1fr; gap: 24px;">
            <div class="dash-main-col">
                <div class="card mb-6">
                    <div class="card-header">
                        <div class="card-title">${window.t('dash.continue')}</div>
                        <span class="badge badge-teal">${window.t('dash.inProgress')}</span>
                    </div>
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" alt="Abstract AI nodes" style="width: 100%; border-radius: var(--radius-md); margin-bottom: 16px; max-height: 150px; object-fit: cover;">
                    <h3 class="mb-2">${window.t('dash.lessonTitle')}</h3>
                    <p class="text-secondary mb-4">${window.t('dash.lessonDesc')}</p>
                    <button class="btn btn-primary" onclick="window.app.navigate('lesson')">${window.t('dash.resume')}</button>
                </div>

                <div class="card">
                    <div class="card-header" style="border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px;">
                        <div class="card-title">${window.t('dash.community')}</div>
                    </div>
                    <p class="text-secondary mb-4 text-sm">${window.t('dash.communityDesc')}</p>
                    <div style="display: flex; gap: 12px;">
                        <button class="btn btn-secondary" onclick="window.app.switchDiscussionTab('case'); window.app.navigate('discussion')">${window.t('dash.caseArea')} 🧩</button>
                        <button class="btn btn-outline" onclick="window.app.switchDiscussionTab('general'); window.app.navigate('discussion')">${window.t('dash.askQuestion')} 💬</button>
                    </div>
                </div>
            </div>

            <div class="dash-side-col">
                <div class="card mb-6">
                    <div class="card-header">
                        <div class="card-title">${window.t('dash.currentPath')}</div>
                    </div>
                    <div class="tree-node mastered" style="padding: 12px;">
                        <div class="node-icon" style="width: 24px; height: 24px;"><i data-lucide="check" style="width: 14px; height: 14px;"></i></div>
                        <div>
                            <div class="text-sm font-bold">${window.t('dash.path1')}</div>
                        </div>
                    </div>
                    <div class="tree-node current" style="padding: 12px;">
                        <div class="node-icon" style="width: 24px; height: 24px; font-size: 12px;">2</div>
                        <div>
                            <div class="text-sm font-bold">${window.t('dash.path2')}</div>
<div class="text-xs text-primary">${window.t('dash.pathFocus')}</div>
                        </div>
                    </div>
                    <div class="tree-node locked" style="padding: 12px;">
                        <div class="node-icon" style="width: 24px; height: 24px; font-size: 12px;">3</div>
                        <div>
                            <div class="text-sm font-bold">${window.t('dash.path3')}</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">${window.t('dash.reflectionJar')}</div>
                    </div>
                    <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                        <div style="flex: 1; text-align: center; background: var(--bg-main); padding: 12px; border-radius: 8px;">
                            <div style="font-size: 24px; font-weight: bold; color: var(--orange); display: flex; justify-content: center; align-items: center; gap: 4px;"><i data-lucide="flame"></i> 5</div>
                            <div class="text-xs font-semibold text-secondary mt-1">${window.t('dash.streak')}</div>
                        </div>
                        <div style="flex: 1; text-align: center; background: var(--bg-main); padding: 12px; border-radius: 8px;">
                            <div style="font-size: 24px;"><i data-lucide="book-open"></i> 12</div>
                            <div class="text-xs font-semibold text-secondary">${window.t('dash.jarTerms')}</div>
                        </div>
                    </div>
                    <button class="btn btn-outline" style="width: 100%;" onclick="window.app.navigate('reflection')">${window.t('dash.openJar')}</button>
                </div>
            </div>
        </div>
    `,

    lesson: () => `
        <div class="workspace-layout">
            <!-- Left panel: Concepts -->
            <div class="panel">
                <div class="panel-header">${window.t('lesson.conceptExp')}</div>
                <div class="panel-content">
                    <div class="badge badge-teal mb-4">${window.t('lesson.dualBase')}</div>
                    <h3 class="mb-4">${window.t('lesson.conceptTitle')}</h3>
                    
                    <div class="text-sm text-secondary mb-6" style="line-height: 1.6;">
                        <p class="mb-4">${window.t('lesson.conceptP1')}
                            <button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; margin-left: 4px;" onclick="window.app.saveTermToJar('Rule-Based Programming', 'Lập trình dựa trên quy tắc', 'Con người viết ra các lệnh IF/THEN cụ thể.')">+ ${window.t('save')}</button>
                        </p>
                        
                        <p>${window.t('lesson.conceptP2')}
<button class="btn btn-outline" style="padding: 2px 6px; font-size: 10px; margin-left: 4px;" onclick="window.app.saveTermToJar('Machine Learning', 'Học máy', 'Máy móc tự học quy luật từ dữ liệu.')">+ ${window.t('save')}</button>
                        </p>
                    </div>

                    <div style="background: var(--bg-main); padding: 16px; border-radius: 8px; border-left: 4px solid var(--primary); margin-bottom: 24px;">
                        <div class="font-bold text-sm mb-2" style="display: flex; align-items: center; gap: 6px;"><i data-lucide="shield-check" style="width: 16px; height: 16px;"></i> <span data-i18n="header.verified">Verified Curriculum</span></div>
                        <div class="text-xs text-secondary">${window.t('lesson.verifiedText')}</div>
                    </div>
                </div>
            </div>

            <!-- Center panel: Workspace -->
            <div class="panel">
                <div class="panel-header">${window.t('lesson.activeLearning')}</div>
                <div class="panel-content workspace-center" id="lesson-interactive">
                    <!-- Injected by app.js -->
                </div>
            </div>

            <!-- Right panel: Reflection Tracker -->
            <div class="panel">
                <div class="panel-header">${window.t('lesson.trackerTitle')}</div>
                <div class="panel-content">
                    <div class="font-bold text-sm mb-2">${window.t('lesson.microStatus')}</div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
                        <div style="display: flex; align-items: center; gap: 8px; color: ${state.lesson.hasAttempted ? 'var(--success)' : 'var(--text-muted)'}">
                            <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid; display: inline-block;"></div>
                            <span class="text-sm">${window.t('lesson.step1')}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; color: ${state.lesson.userAttempt ? 'var(--primary)' : 'var(--text-muted)'}">
                            <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid; display: inline-block;"></div>
                            <span class="text-sm">${window.t('lesson.step2')}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; color: ${state.lesson.hasRevised ? 'var(--success)' : 'var(--text-muted)'}">
                            <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid; display: inline-block;"></div>
                            <span class="text-sm">${window.t('lesson.step3')}</span>
                        </div>
<div style="display: flex; align-items: center; gap: 8px; color: ${state.lesson.hasReflected ? 'var(--success)' : 'var(--text-muted)'}">
                            <div style="width: 16px; height: 16px; border-radius: 50%; border: 2px solid; display: inline-block;"></div>
                            <span class="text-sm">${window.t('lesson.step4')}</span>
                        </div>
                    </div>

                    <div class="card" style="padding: 16px; background: var(--bg-main); border: 1px solid var(--border); box-shadow: none;">
                        <div class="text-sm font-semibold mb-2">${window.t('lesson.nextStep')}</div>
                        <p class="text-xs text-secondary mb-4">${window.t('lesson.nextStepDesc')}</p>
                        <button class="btn btn-outline" style="width: 100%; font-size: 12px;" onclick="window.app.switchDiscussionTab('case'); window.app.navigate('discussion')" ${!state.lesson.hasReflected ? 'disabled' : ''}>${window.t('lesson.moveToCase')}</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    discussion: () => {
        const isCaseTab = state.discussionTab === 'case';
        const isUnlocked = state.weeklyCase.isUnlocked;
        const hasSubmitted = state.weeklyCase.hasSubmitted;

        let content = '';

        if (!isCaseTab) {
            content = `
                <!-- General Discussion View -->
                <div class="card" style="padding: 0; overflow: hidden; margin-bottom: 24px;">
                    <div class="panel-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <span>${window.t('disc.genTitle')}</span>
                        <button class="btn btn-primary text-sm">${window.t('disc.askBtn')}</button>
                    </div>
                    
                    <div class="post-card" style="background: var(--primary-light);">
                        <div class="post-header">
                            <div class="post-meta">
                                <div class="avatar" style="width: 24px; height: 24px; font-size: 10px;">ED</div>
                                <span class="font-bold text-primary-dark">Educator Tran (Moderator)</span>
                                <span class="badge badge-green" style="font-size: 10px; display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="pin" style="width: 10px; height: 10px;"></i> Pinned</span>
                            </div>
                            <span class="text-xs text-muted">2 hours ago</span>
                        </div>
                        <div class="font-bold mb-2">Common confusion: Algorithm vs Model</div>
                        <p class="text-sm text-secondary">Think of an algorithm as the pure math recipe, and the model as the baked cake that comes out after we feed data into the recipe.</p>
                    </div>
<div class="post-card">
                        <div class="post-header">
                            <div class="post-meta">
                                <div class="avatar" style="width: 24px; height: 24px; font-size: 10px; background: #9ca3af;">ST</div>
                                <span class="font-bold">Nguyen T.</span>
                                <span class="badge badge-teal" style="font-size: 10px;">Peer Helper</span>
                            </div>
                            <span class="text-xs text-muted">5 mins ago</span>
                        </div>
                        <div class="font-bold mb-2">Stuck on the thermostat example</div>
                        <p class="text-sm mb-4">I understand that a thermostat saying "if temp < 20, turn on heater" is rule-based. But what if it remembers what time I come home?</p>
                        
                        <div class="trusted-answer">
                            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
                                <i data-lucide="shield-check" style="color: var(--success); width: 16px; height: 16px;"></i>
                                <span class="font-bold text-sm" style="color: var(--success)">Educator Endorsed Answer</span>
                            </div>
                            <p class="text-sm"><strong>Le Hoa:</strong> If it adapts automatically over time without a human programming the exact schedule, it is using Machine Learning to find patterns in your arrival times!</p>
                        </div>
                    </div>
                </div>
            `;
        } else {
            if (!isUnlocked) {
                content = `
                    <div class="card" style="text-align: center; padding: 60px 20px;">
                        <div style="display: flex; justify-content: center; margin-bottom: 16px; color: var(--text-muted);"><i data-lucide="lock" style="width: 48px; height: 48px;"></i></div>
                        <h2 class="mb-2">${window.t('disc.lockedTitle')}</h2>
                        <p class="text-secondary mb-6">${window.t('disc.lockedDesc')}</p>
                        <div style="background: var(--bg-main); display: inline-block; padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border);">
                            <div class="text-sm font-bold mb-2">${window.t('disc.missingReq')}</div>
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <span class="badge" style="background: var(--border); color: var(--text-muted)">${window.t('disc.incomplete')}</span>
                                <span>${window.t('dash.lessonTitle')}</span>
                            </div>
                            <button class="btn btn-primary mt-4" onclick="window.app.navigate('lesson')">${window.t('disc.goLesson')}</button>
                        </div>
</div>
                `;
            } else if (!hasSubmitted) {
                content = `
                    <div class="card mb-6">
                        <div class="card-header" style="border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 24px;">
                            <div>
                                <h2 class="card-title" style="font-size: 24px;">${window.t('disc.caseHeading')}</h2>
                                <span class="badge badge-orange mt-2">${window.t('disc.levelApp')}</span>
                                <span class="badge badge-teal mt-2">${window.t('disc.reqConcept')}</span>
                            </div>
                        </div>
                        
                        <div class="grid-2-col">
                            <div>
                                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80" alt="Smartphone screen showing video feed" style="width: 100%; border-radius: var(--radius-md); margin-bottom: 16px; max-height: 250px; object-fit: cover;">
                                <h3 class="mb-2">${window.t('disc.scenario')}</h3>
                                <p class="text-secondary text-sm mb-4">${window.t('disc.scenarioP1')}</p>
                                <p class="text-secondary text-sm mb-4">${window.t('disc.scenarioP2')}</p>
                            </div>
                            <div style="background: var(--bg-main); padding: 24px; border-radius: var(--radius-lg); border: 1px solid var(--border);">
                                <div class="font-bold mb-4">${window.t('disc.analysis')}</div>
                                <p class="text-sm text-secondary mb-4">${window.t('disc.analysisDesc')}</p>
                                <textarea id="case-solution-input" class="lesson-input mb-4" style="min-height: 120px;" placeholder="${window.t('disc.placeholder')}"></textarea>
                                <div style="display: flex; gap: 12px; align-items: center;">
                                    <button class="btn btn-primary" onclick="window.app.submitWeeklyCase()">${window.t('disc.publish')}</button>
                                    <button class="btn btn-outline" style="border: none; display: flex; align-items: center; gap: 6px;"><i data-lucide="lightbulb" style="width: 14px; height: 14px;"></i> ${window.t('disc.reqHint')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                content = `
                    <div class="card mb-6" style="background: var(--primary-light); border: 1px solid var(--primary);">
                        <div class="card-header">
                            <div>
                                <div class="text-xs font-bold text-primary mb-1">${window.t('disc.publishedTitle')}</div>
<h2 class="card-title">${window.t('disc.caseHeading')}</h2>
                            </div>
                            <span class="badge badge-green">${window.t('disc.completed')}</span>
                        </div>
                        <div style="background: white; padding: 16px; border-radius: var(--radius-md); margin-top: 16px;">
                            ${state.weeklyCase.userSolution}
                        </div>
                        <div class="trusted-answer mt-4" style="background: white;">
                            <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 8px;">
                                <div class="avatar" style="width: 20px; height: 20px; font-size: 10px;">ED</div>
                                <span class="font-bold text-sm" style="color: var(--primary)">Educator Tran:</span>
                            </div>
                            <p class="text-sm">Great logic! You correctly identified that it's learning from your behavior patterns without someone explicitly programming a "mechanical keyboard" rule for you.</p>
                        </div>
                    </div>

                    <h3 class="mb-4">${window.t('disc.peerSolutions')}</h3>
                    <div class="post-card">
                        <div class="post-header">
                            <div class="post-meta">
                                <div class="avatar" style="width: 24px; height: 24px; font-size: 10px; background: #9ca3af;">BA</div>
                                <span class="font-bold">Binh An</span>
                            </div>
                            <span class="text-xs text-muted">1 hour ago</span>
                        </div>
                        <p class="text-sm mb-4">I thought it was rule-based because it follows a rule: "show more of what I click". But I guess it's ML because it's predicting what I might click next based on data?</p>
                        
                        <div style="margin-left: 24px; border-left: 2px solid var(--border); padding-left: 16px; margin-top: 12px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                                <span class="font-bold text-xs">You</span>
                                <span class="text-xs text-muted">Just now</span>
                            </div>
                            <p class="text-xs text-secondary mb-2">Yeah exactly! It's predicting, not just following a rigid IF statement.</p>
                            <input type="text" class="lesson-input text-xs" style="padding: 6px 8px; margin-top: 8px;" placeholder="${window.t('disc.replyPlaceholder')}">
                        </div>
                    </div>
                `;
            }
        }

        return `
            <div class="mb-6">
                <h2>${window.t('disc.title')}</h2>
<p class="text-secondary">${window.t('disc.desc')}</p>
            </div>
            
            <div class="hub-sub-nav mb-6" style="display: flex; gap: 24px; border-bottom: 1px solid var(--border);">
                <div class="hub-tab ${!isCaseTab ? 'active' : ''}" onclick="window.app.switchDiscussionTab('general')" style="padding: 8px 16px; cursor: pointer; border-bottom: 3px solid ${!isCaseTab ? 'var(--primary)' : 'transparent'}; font-weight: ${!isCaseTab ? 'bold' : 'normal'}; color: ${!isCaseTab ? 'var(--primary-dark)' : 'var(--text-secondary)'};">${window.t('disc.tabGen')}</div>
                <div class="hub-tab ${isCaseTab ? 'active' : ''}" onclick="window.app.switchDiscussionTab('case')" style="padding: 8px 16px; cursor: pointer; border-bottom: 3px solid ${isCaseTab ? 'var(--primary)' : 'transparent'}; font-weight: ${isCaseTab ? 'bold' : 'normal'}; color: ${isCaseTab ? 'var(--primary-dark)' : 'var(--text-secondary)'}; display: flex; align-items: center; gap: 8px;">
                    ${window.t('disc.tabCase')}
                    ${!hasSubmitted ? (isUnlocked ? '<span style="width: 8px; height: 8px; background: var(--orange); border-radius: 50%; display: inline-block;"></span>' : '<i data-lucide="lock" style="width: 14px; height: 14px;"></i>') : '<i data-lucide="check-circle" style="width: 14px; height: 14px;"></i>'}
                </div>
            </div>

            <div class="discussion-content">
                ${content}
            </div>
        `;
    },

    reflection: () => `
        <div class="grid-2-col">
            <div class="card">
                <div class="card-header">
                    <div class="card-title">${window.t('refl.history')}</div>
                    <span class="badge badge-orange" style="display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="flame" style="width: 14px; height: 14px;"></i> 5 ${window.t('dash.streak')}</span>
                </div>
                
                <div class="mb-6" style="border-left: 3px solid var(--primary); padding-left: 16px;">
                    <div class="text-xs text-muted mb-1">${window.t('refl.today')}</div>
                    <div class="font-bold text-sm mb-2">${window.t('refl.concept')}</div>
                    <p class="text-sm text-secondary mb-2">${window.t('refl.text1')}</p>
                    <div style="display: inline-block; background: var(--success-light); color: var(--success); padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">
                        ${window.t('refl.feedback1')}
                    </div>
                </div>
                
                <div style="border-left: 3px solid var(--border); padding-left: 16px;">
                    <div class="text-xs text-muted mb-1">${window.t('refl.ago')}</div>
                    <div class="font-bold text-sm mb-2">${window.t('refl.concept2')}</div>
                    <p class="text-sm text-secondary">${window.t('refl.text2')}</p>
</div>
            </div>

            <div class="card">
                <div class="card-header">
                    <div class="card-title">${window.t('refl.jarTitle')}</div>
                    <button class="btn btn-primary text-sm" onclick="window.app.addVocabModal()">${window.t('refl.addTerm')}</button>
                </div>
                <p class="text-xs text-secondary mb-4">${window.t('refl.jarDesc')}</p>
                <div id="vocab-list" style="display: flex; flex-direction: column; gap: 16px;">
                    <!-- Rendered by JS -->
                </div>
            </div>
        </div>
    `,

    growth: () => `
        <div class="card mb-6 text-center" style="padding: 40px;">
            <div class="avatar" style="width: 80px; height: 80px; font-size: 32px; margin: 0 auto 16px auto;">MA</div>
            <h2>Nguyen Minh Anh</h2>
            <p class="text-secondary mt-2">${window.t('growth.subtitle')}</p>
        </div>

        <div class="grid-3-col mb-6">
            <div class="stat-card">
                <div class="text-sm font-bold text-secondary">${window.t('growth.cases')}</div>
                <div class="stat-value">2</div>
                <div class="badge badge-teal">${window.t('growth.casesBadge')}</div>
            </div>
            <div class="stat-card">
                <div class="text-sm font-bold text-secondary">${window.t('growth.mins')}</div>
                <div class="stat-value">145</div>
                <div class="badge badge-blue">${window.t('growth.minsBadge')}</div>
            </div>
            <div class="stat-card">
                <div class="text-sm font-bold text-secondary">${window.t('growth.contrib')}</div>
                <div class="stat-value">8</div>
                <div class="badge badge-green">${window.t('growth.contribBadge')}</div>
            </div>
        </div>

        <div class="card">
            <h3 class="mb-4">${window.t('growth.badgesTitle')}</h3>
            <div style="display: flex; gap: 16px;">
                <div style="text-align: center; background: var(--bg-main); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border); width: 120px;">
                    <div style="display: flex; justify-content: center; margin-bottom: 12px; color: var(--primary);"><i data-lucide="brain" style="width: 32px; height: 32px;"></i></div>
                    <div class="text-sm font-bold">${window.t('growth.badge1')}</div>
                </div>
                <div style="text-align: center; background: var(--bg-main); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border); width: 120px;">
                    <div style="display: flex; justify-content: center; margin-bottom: 12px; color: var(--orange);"><i data-lucide="pen-tool" style="width: 32px; height: 32px;"></i></div>
                    <div class="text-sm font-bold">${window.t('growth.badge2')}</div>
                </div>
            </div>
        </div>
`,

    thinkFirst: () => `
        <div class="card" style="max-width: 800px; margin: 0 auto; border-top: 4px solid var(--primary);">
            <div class="text-center mb-6 mt-4">
                <div style="display: flex; justify-content: center; margin-bottom: 16px; color: var(--orange);"><i data-lucide="lightbulb" style="width: 48px; height: 48px;"></i></div>
                <h2 style="font-size: 28px;">${window.t('tf.title')}</h2>
                <p class="text-secondary mt-2">${window.t('tf.desc')}</p>
            </div>

            <div class="grid-2-col mt-6">
                <div class="principle-card" style="background: var(--bg-main); border-radius: var(--radius-lg);">
                    <div class="principle-icon">1</div>
                    <h3 class="font-bold">${window.t('tf.c1Title')}</h3>
                    <p class="text-sm text-secondary">${window.t('tf.c1Desc')}</p>
                </div>
                <div class="principle-card" style="background: var(--bg-main); border-radius: var(--radius-lg);">
                    <div class="principle-icon">2</div>
                    <h3 class="font-bold">${window.t('tf.c2Title')}</h3>
                    <p class="text-sm text-secondary">${window.t('tf.c2Desc')}</p>
                </div>
                <div class="principle-card" style="background: var(--bg-main); border-radius: var(--radius-lg);">
                    <div class="principle-icon">3</div>
                    <h3 class="font-bold">${window.t('tf.c3Title')}</h3>
                    <p class="text-sm text-secondary">${window.t('tf.c3Desc')}</p>
                </div>
                <div class="principle-card" style="background: var(--bg-main); border-radius: var(--radius-lg);">
                    <div class="principle-icon">4</div>
                    <h3 class="font-bold">${window.t('tf.c4Title')}</h3>
                    <p class="text-sm text-secondary">${window.t('tf.c4Desc')}</p>
                </div>
            </div>
        </div>
    `,

    // -----------------------------------------------------
    // EDUCATOR VIEWS
    // -----------------------------------------------------

    caseCreator: () => `
        <div class="mb-6" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h2>Case Study Creator</h2>
                <p class="text-secondary">Create and manage Weekly Cases to challenge your students.</p>
            </div>
            <button class="btn btn-primary" onclick="alert('Case Published successfully!')">Publish Case</button>
        </div>

        <div class="grid-2-col">
            <!-- Left Column: Form -->
            <div class="card">
                <div class="card-header">
                    <div class="card-title">New Case Details</div>
                </div>
                
                <div class="mb-4">
                    <label class="text-sm font-bold block mb-1">Case Title</label>
<input type="text" class="lesson-input" placeholder="e.g. Is YouTube Reading Your Mind?">
                </div>

                <div class="mb-4">
                    <label class="text-sm font-bold block mb-1">Topic Tag</label>
                    <input type="text" class="lesson-input" placeholder="e.g. Data, Patterns, Algorithms">
                </div>

                <div class="mb-4">
                    <label class="text-sm font-bold block mb-1">Difficulty Level</label>
                    <select class="lesson-input">
                        <option>Foundation</option>
                        <option>Application</option>
                        <option>Challenge</option>
                    </select>
                </div>

                <div class="mb-4">
                    <label class="text-sm font-bold block mb-1">Required Concepts / Skills</label>
                    <input type="text" class="lesson-input" placeholder="e.g. Rule-based vs ML">
                </div>

                <div class="mb-4">
                    <label class="text-sm font-bold block mb-1">Scenario / Description</label>
                    <textarea class="lesson-input" style="min-height: 100px;" placeholder="Describe the real-life scenario here..."></textarea>
                </div>
                
                <div class="mb-4">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <label class="text-sm font-bold">AI-Generated Hints</label>
                        <button class="btn btn-outline text-xs" style="padding: 4px 8px;" onclick="alert('Hints generated!')">✨ Auto-Generate</button>
                    </div>
                    <textarea class="lesson-input" style="min-height: 80px;" placeholder="Hints will appear here for you to review and edit..."></textarea>
                </div>

                <button class="btn btn-secondary" style="width: 100%" onclick="alert('Preview Mode Activated')">Preview Mode 👁️</button>
            </div>

            <!-- Right Column: Previously Created Cases -->
            <div class="card">
                <div class="card-header">
                    <div class="card-title">Previously Created Cases</div>
                </div>
                
                <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; margin-bottom: 12px; background: var(--bg-main);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <h4 class="font-bold">Is YouTube Reading Your Mind?</h4>
                        <span class="badge badge-orange" style="font-size: 10px;">Application</span>
                    </div>
                    <p class="text-sm text-secondary mb-2">Topic: Data & Patterns</p>
                    <div style="display: flex; gap: 8px;">
<button class="btn btn-outline text-xs">Edit</button>
                        <button class="btn btn-outline text-xs" style="color: var(--danger); border-color: var(--danger);">Unpublish</button>
                    </div>
                </div>

                <div style="border: 1px solid var(--border); border-radius: var(--radius-md); padding: 16px; background: var(--bg-main);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                        <h4 class="font-bold">Smart Thermostat Logic</h4>
                        <span class="badge badge-teal" style="font-size: 10px;">Foundation</span>
                    </div>
                    <p class="text-sm text-secondary mb-2">Topic: Rule-based Systems</p>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-outline text-xs">Edit</button>
                        <button class="btn btn-outline text-xs" style="color: var(--danger); border-color: var(--danger);">Unpublish</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    discussionHub: () => `
        <div class="mb-6">
            <h2>Educator Discussion Hub</h2>
            <p class="text-secondary">Guide students, clarify concepts, and support the community.</p>
        </div>

        <div class="grid-2-col">
            <!-- Left: Thread List -->
            <div class="card" style="padding: 0; overflow: hidden; height: fit-content;">
                <div class="panel-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <span>Active Questions</span>
                    <div style="display: flex; gap: 8px;">
                        <span class="badge badge-orange">2 Unanswered</span>
                    </div>
                </div>
                
                <div class="post-card" style="border-left: 4px solid var(--orange); cursor: pointer; background: var(--bg-main);">
                    <div class="post-header">
                        <div class="post-meta">
                            <div class="avatar" style="width: 24px; height: 24px; font-size: 10px; background: #9ca3af;">ST</div>
                            <span class="font-bold">Nguyen T.</span>
                        </div>
                        <span class="text-xs text-muted">5 mins ago</span>
                    </div>
                    <div class="font-bold mb-2">Stuck on the thermostat example</div>
                    <p class="text-sm mb-2 text-secondary">I understand that a thermostat saying "if temp < 20, turn on heater" is rule-based. But what if it remembers what time I come home?</p>
                    <span class="badge" style="background: var(--warning-light); color: var(--warning-dark); font-size: 10px;">Needs Educator Reply</span>
                </div>
<div class="post-card" style="cursor: pointer;">
                    <div class="post-header">
                        <div class="post-meta">
                            <div class="avatar" style="width: 24px; height: 24px; font-size: 10px; background: #9ca3af;">BA</div>
                            <span class="font-bold">Binh An</span>
                        </div>
                        <span class="text-xs text-muted">1 hour ago</span>
                    </div>
                    <div class="font-bold mb-2">Are calculators AI?</div>
                    <p class="text-sm mb-2 text-secondary">I don't get why calculators aren't considered AI...</p>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <span class="badge badge-green" style="font-size: 10px;">📌 Pinned</span>
                        <span class="text-xs text-muted">1 reply</span>
                    </div>
                </div>
            </div>

            <!-- Right: Thread Viewer / Reply Area -->
            <div class="card">
                <div style="border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 16px;">
                    <div class="post-header">
                        <div class="post-meta">
                            <div class="avatar" style="width: 32px; height: 32px; font-size: 12px; background: #9ca3af;">ST</div>
                            <span class="font-bold text-lg">Nguyen T.</span>
                        </div>
                        <span class="text-xs text-muted">5 mins ago</span>
                    </div>
                    <h3 class="mb-2 mt-2">Stuck on the thermostat example</h3>
                    <p class="text-sm">I understand that a thermostat saying "if temp < 20, turn on heater" is rule-based. But what if it remembers what time I come home?</p>
                </div>

                <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                    <button class="btn btn-outline text-xs" onclick="alert('Thread summarized!')">✨ Summarize with AI</button>
                    <button class="btn btn-outline text-xs" onclick="alert('Thread Pinned!')">📌 Pin Question</button>
                    <button class="btn btn-outline text-xs" style="color: var(--danger); border-color: var(--danger);">Moderate (Hide)</button>
                </div>

                <div class="reply-area">
                    <label class="font-bold text-sm block mb-2">Your Reply:</label>
                    <textarea class="lesson-input mb-3" style="min-height: 100px;" placeholder="Guide the student here..."></textarea>
                    
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <label style="display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">
<input type="checkbox" checked> Mark as "Educator Response" 🛡️
                        </label>
                        <button class="btn btn-primary" onclick="alert('Reply posted!')">Post Reply</button>
                    </div>
                </div>
            </div>
        </div>
    `
};