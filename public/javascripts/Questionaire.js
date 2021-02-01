
// Contains the two questionnaires given to us by Cliexa.
let data =[
    // Smoking questionnaire
    {id:0,q:"Are you a current smoker?",yes:1,no:17}, // The starting code for smoking
    {id:1,q:"Do you smoke within the first 30 minutes after waking up?", yes:2,no:2},
    {id:2,q:"Do you find it difficult to smoke in places you shouldn't? Examples: schools, hospital, library, etc...",yes:3,no:3},
    {id:3,q:"Do you treasure the first cigarette you take in the morning the most?",yes:4,no:4},
    {id:4,q:"Do you smoke over 20 cigarettes each day?",yes:5,no:5},
    {id:5,q:"Do you smoke more during the first few hours after waking up than the rest of the day?", yes:6,no:6},
    {id:6,q:"Do you still smoke even if you are sick, have the cold or flu or have trouble breathing?",yes:7,no:7},
    {id:7,q:"We are finalizing your result for smoking",loading:0},// The final code for smoking

    // CCM questionnaire
    {id:8,q:"Are you a returning patient?",yes:12, no:9}, // The starting code for CCM
    {id:9,q:"Are you enrolled in medicare?", yes:10,no:15},
    {id:10,q:"Do you have two or more diagnoses shown below?",yes:12,no:11},
    {id:11,q:"Implementing the PHQ-9. Click yes if its high/med. Click no if its low.",yes:12,no:16},
    {id:12,q:"Are you enrolled in any Chronic Care Management with any other physician?",yes:16,no:13},
    {id:13,q:"Did you sign the CCM consent form?",yes:14,no:16},
    {id:14,q:"Is this your CCM plan worksheet?", yes:15,no:16},
    {id:15,q:"Remote Patient Monitoring set up screen will populate here. Is this your RPM?",yes:16,no:16},
    {id:16,q:"We are finalizing your result for CCM",loading:8}, // The final code for CCM

    // Depression questionnaire
    {id:17,q:"Are you experiencing symptoms of depression?",yes:18,no:28}, // The starting code for depression
    {id:18,q:"Do you have little interest or pleasure in doing things?", yes:19,no:19},
    {id:19,q:"Are you feeling down, depressed, or hopeless?",yes:20,no:20},
    {id:20,q:"Do you have trouble falling or staying asleep, or sleeping to much?",yes:21,no:21},
    {id:21,q:"Are you feeling tired or having little energy?",yes:22,no:22},
    {id:22,q:"Do you have poor appetite or do you overeat?",yes:23,no:23},
    {id:23,q:"Do you feel bad about yourself - or think that you are a failure or have let you or your family down?",yes:24,no:24},
    {id:24,q:"Do you have troubles concentrating on things such as watching television?",yes:25,no:25},
    {id:25,q:"Do you have so little or so much energy that other people would notice?",yes:26,no:26},
    {id:26,q:"Do you thoughts that you would be better off dead or thoughts of hurting yourself?",yes:27,no:27},
    {id:27,q:"We are finalizing your results for depression",loading:17}, // The final code for depression

    // Anxiety questionnaire
    {id:28,q:"Are you experiencing symptoms of anxiety?",yes:29,no:37},
    {id:29,q:"Do you often feel nervous, anxious, or on edge?",yes:30,no:30},
    {id:30,q:"Are you not able to stop or control worrying?",yes:31,no:31},
    {id:31,q:"Do you worry to much about different things?",yes:32,no:32},
    {id:32,q:"Do you often have trouble relaxing?",yes:33,no:33},
    {id:33,q:"Are you so restless that it is hard to sit still?",yes:34,no:34},
    {id:34,q:"Do you easily become annoyed or irritable?",yes:35,no:35},
    {id:35,q:"Do you often feel afraid that something awful might happen?",yes:36,no:36},
    {id:36,q:"We are finalizing your result for anxiety",loading:28},

    // Alcohol Assessment
    {id:37,q:"Do you drink alcohol?",yes:38,no:49}, // Go to the alcohol assessment
    {id:38,q:"Do you often consume a drink containing alcohol?",yes:39,no:39},
    {id:39,q:"Do you consume 5 or more drinks containing alcohol in a typical day?",yes:40,no:40},
    {id:40,q:"Do you have consume 6 or more alcoholic drinks on one occasion monthly?",yes:41,no:41},
    {id:41,q:"Do you often find yourself unable to stop drinking once you have started drinking?",yes:42,no:42},
    {id:42,q:"Do you often fail to do what is normally expected from you because of drinking?",yes:43,no:43},
    {id:43,q:"Do you often need a drink in the morning to get yourself going after a heavy drinking session?",yes:44,no:44},
    {id:44,q:"Do you often have a feeling of guilt or remorse after drinking?",yes:45,no:45},
    {id:45,q:"Do you often have not been unable to remember what happened the night before because of drinking?",yes:46,no:46},
    {id:46,q:"Have you or someone else been injured as a result of your drinking?",yes:47,no:47},
    {id:47,q:"Has a relative, friend, healthcare worker been concerned about your drinking?",yes:48,no:48},
    {id:48,q:"We are finalizing your result for the alcohol assessment",loading:37},

    // Drug assessment
    {id:49,q:"Do you use drugs?",yes:50,no:8},
    {id:50,q:"Have you used drugs other than those required for medical reasons?",yes:51,no:51},
    {id:51,q:"Do you abuse more than one drug at a time?",yes:52,no:52},
    {id:52,q:'Are you always able to stop using drugs when you wanted too? (If never used drugs, answer "Yes")',yes:53,no:53},
    {id:53,q:'Have you had "Blackouts" or "Flashbacks" as a result of drug use?', yes:54,no:54},
    {id:54,q:'Do you ever feel bad or guilty about your drug use? If never used drugs, choose "No"',yes:55,no:55},
    {id:55,q:"Does your spouse (or parents) ever complain about your involvement with drugs?",yes:56,no:56},
    {id:56,q:"Have you neglected your family because of your use of drugs?",yes:57,no:57},
    {id:57,q:"Have you engaged in illegal activities inorder to obtain drugs?",yes:58,no:58},
    {id:58,q:"Have you ever experienced withdrawal symptoms when you stopped taking drugs?",yes:59,no:59},
    {id:59,q:"Have you had medical problems as a result of your drug use? (e.g., memory loss, hepatitis, convulsions, bleeding, etc...)",yes:60,no:60},
    {id:60,q:"We are finalizing your result for the drug assessment",loading:49}
]

//Call from search question
