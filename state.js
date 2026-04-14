const state = {
    role: 'student', // 'student' or 'educator'
    lang: 'vi', // 'en' or 'vi'
    currentView: 'dashboard', // default view
    discussionTab: 'general', // 'general' or 'case'
    
    
    // Mock user data
    student: {
        name: 'Nguyen Minh Anh',
        avatar: 'MA',
        streak: 5,
        casesSolved: 2,
        minutesLearned: 145,
        badges: ['Curious Mind', 'First Reflection']
    },

    // Mock lesson state
    lesson: {
        currentConceptId: 'c1',
        title: 'What is AI vs Rule-Based Systems?',
        hasAttempted: false,
        hasRevised: false,
        hasReflected: false,
        userAttempt: '',
        userRevision: '',
        userReflection: ''
    },

    // Mock Weekly Case state
    weeklyCase: {
        isUnlocked: false,
        hasSubmitted: false,
        userSolution: ''
    },
    
    // Mock vocab bank (Reflection Jar)
    vocabBank: [
        { 
            termEn: 'Algorithm', 
            termVn: 'Thuật toán', 
            def: 'A step-by-step set of operations to be performed. (Một loạt các bước để thực hiện giải quyết vấn đề).', 
            noted: 'Giống như là công thức nấu ăn.' 
        },
        { 
            termEn: 'Data', 
            termVn: 'Dữ liệu', 
            def: 'Information collected for reference or analysis. (Thông tin được thu thập để phân tích).', 
            noted: 'Nhiên liệu để dạy cho Machine Learning (Học máy).' 
        }
    ],

    // Mock Educator overview data
    educatorStats: {
        reflectionRate: 85,
        avgConfidence: 72,
        activeCases: 24,
        improving: 12
    }
};

const navigation = {
    student: [
        { id: 'dashboard', labelKey: 'nav.dashboard', icon: '<i data-lucide="layout-dashboard"></i>' },
        { id: 'lesson', labelKey: 'nav.lesson', icon: '<i data-lucide="laptop"></i>' },
        { id: 'discussion', labelKey: 'nav.discussion', icon: '<i data-lucide="message-square"></i>' },
        { id: 'reflection', labelKey: 'nav.reflection', icon: '<i data-lucide="brain"></i>' },
        { id: 'growth', labelKey: 'nav.growth', icon: '<i data-lucide="trending-up"></i>' }
    ],
    educator: [
        { id: 'caseCreator', labelKey: 'nav.caseCreator', icon: '<i data-lucide="file-edit"></i>' },
        { id: 'discussionHub', labelKey: 'nav.discussionHub', icon: '<i data-lucide="message-square"></i>' }
    ]
};