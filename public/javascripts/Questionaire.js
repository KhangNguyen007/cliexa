/*

Questionaire file will be responsible for add or remove questionaire in this file.

 */
let data =[
    // Smoking questionnaire (Smoking)
    {id:0,q:"Are you a current smoker?",yes:1,no:16}, // The starting code for smoking
    {id:1,q:"Do you smoke within the first 30 minutes after waking up?", yes:2,no:2},
    {id:2,q:"Do you find it difficult to smoke in places you shouldn't? Examples: schools, hospitals, libraries, etc...",yes:3,no:3},
    {id:3,q:"Do you treasure the first cigarette you smoke in the morning the most?",yes:4,no:4},
    {id:4,q:"Do you smoke over 20 cigarettes each day?",yes:5,no:5},
    {id:5,q:"Do you smoke more during the first few hours after waking up than during the rest of the day?", yes:6,no:6},
    {id:6,q:"Do you smoke even if you are sick, have the flu or have trouble breathing?",yes:7,no:7},
    {id:7,q:"We are finalizing your result for smoking.",loading:0},// The final code for smoking

    // CCM questionnaire (CCM)
    {id:8,q:"Are you a returning patient?",yes:12, no:9}, // The starting code for CCM
    {id:9,q:"Are you currently enrolled in medicare?", yes:10,no:15},
    {id:10,q:"Do you have two or more of the following diagnoses: depression, cancer, HIV/AIDS, diabetes, heart failure, " +
            "stroke, asthma, arthritis, hypertension (high blood pressure), chronic kidney disease, ischemic heart disease, " +
            " or any other diagnoses?",yes:12,no:17}, // This will connect to the Depression questionnaire
    {id:11,q:"Implementing the PHQ-9. Click yes if it's high/medium. Click no if it's low.",yes:12,no:15},
    {id:12,q:"Are you currently enrolled in any Chronic Care Management with any other physician?",yes:15,no:13},
    {id:13,q:"Did you sign the Chronic Care Management consent form?",yes:14,no:15},
    {id:14,q:"Is this your Chronic Care Management plan worksheet?", yes:15,no:15},
    //{id:15,q:"Remote Patient Monitoring set up screen will populate here. Is this your RPM?",yes:16,no:16},
    {id:15,q:"We are finalizing your result for Chronic Care Management.",loading:8}, // The final code for CCM

    // Depression questionnaire (PHQ-9)
    {id:16,q:"Are you experiencing symptoms of depression?",yes:17,no:27}, // The starting code for depression
    {id:17,q:"Do you often have little interest or pleasure in doing things?", yes:18,no:18},
    {id:18,q:"Are you feeling down, depressed, or hopeless?",yes:19,no:19},
    {id:19,q:"Do you often have trouble falling asleep, staying asleep, or sleeping to much?",yes:20,no:20},
    {id:20,q:"Do you often feel tired or have little to no energy?",yes:21,no:21},
    {id:21,q:"Do you often have poor appetite or overeat?",yes:22,no:22},
    {id:22,q:"Do you often think that you are a failure and have let you or your family down?",yes:23,no:23},
    {id:23,q:"Do you often have trouble concentrating on things such as watching television?",yes:24,no:24},
    {id:24,q:"Do other people often notice that you have too little or too much energy?",yes:25,no:25},
    {id:25,q:"Do you often have thoughts that you would be better off dead, or do you have thoughts of hurting yourself?",yes:26,no:26,ccm:12},
    {id:26,q:"We are finalizing your results for depression.",loading:16}, // The final code for depression

    // Anxiety questionnaire (GAD-7)
    {id:27,q:"Are you experiencing symptoms of anxiety?",yes:28,no:36},
    {id:28,q:"Do you often feel nervous, anxious, or on edge?",yes:29,no:29},
    {id:29,q:"Are you unable to stop or control your worrying?",yes:30,no:30},
    {id:30,q:"Do you worry too much about different things?",yes:31,no:31},
    {id:31,q:"Do you often have trouble relaxing?",yes:32,no:32},
    {id:32,q:"Are you often so restless that it becomes difficult to sit still?",yes:33,no:33},
    {id:33,q:"Do you easily become annoyed or irritable?",yes:34,no:34},
    {id:34,q:"Do you often feel afraid that something awful might happen?",yes:35,no:35},
    {id:35,q:"We are finalizing your result for the anxiety assessment.",loading:27},

    // Alcohol Assessment (AUDIT)
    {id:36,q:"Do you drink alcohol?",yes:37,no:48}, // Go to the alcohol assessment
    {id:37,q:"Do you often consume drinks containing alcohol?",yes:38,no:38},
    {id:38,q:"Do you consume 5 or more drinks containing alcohol in a typical day?",yes:39,no:39},
    {id:39,q:"Do you often consume 6 or more alcoholic drinks on one occasion every month?",yes:40,no:40},
    {id:40,q:"Do you often find yourself unable to stop drinking once you have started drinking?",yes:41,no:41},
    {id:41,q:"Do you often fail to do what is normally expected from you because of drinking?",yes:42,no:42},
    {id:42,q:"Do you often need a drink in the morning to get yourself going after a heavy drinking session?",yes:43,no:43},
    {id:43,q:"Do you often have a feeling of guilt or remorse after drinking?",yes:44,no:44},
    {id:44,q:"Have you often been unable to remember what happened the night before after drinking?",yes:45,no:45},
    {id:45,q:"Have you or someone else been injured as a result of your drinking?",yes:46,no:46},
    {id:46,q:"Has a relative, friend, or healthcare worker been concerned about your drinking?",yes:47,no:47},
    {id:47,q:"We are finalizing your result for the alcohol assessment.",loading:36},

    // Drug assessment (DAST-10)
    {id:48,q:"Do you use drugs?",yes:49,no:8},
    {id:49,q:"Do you use drugs other than those required for medical reasons?",yes:50,no:50},
    {id:50,q:"Do you abuse more than one drug at a time?",yes:51,no:51},
    {id:51,q:'Are you able to stop using drugs when you want too? (If you never used drugs, answer "Yes")',yes:52,no:52},
    {id:52,q:'Did you have any "blackouts" or "flashbacks" as a result of drug use?', yes:53,no:53},
    {id:53,q:'Have you ever felt bad or guilty about your drug use? (If you never used drugs, answer "No")',yes:54,no:54},
    {id:54,q:"Do your parents or spouse ever complain about your involvement with drugs?",yes:55,no:55},
    {id:55,q:"Have you neglected your family because of your use of drugs?",yes:56,no:56},
    {id:56,q:"Have you engaged in illegal activities in order to obtain drugs?",yes:57,no:57},
    {id:57,q:"Have you ever experienced withdrawal symptoms when you stopped taking drugs?",yes:58,no:58},
    {id:58,q:"Have you had any medical problems as a result of your drug use? (e.g., memory loss, hepatitis, convulsions, bleeding, etc...)",yes:59,no:59},
    {id:59,q:"We are finalizing your result for the drug assessment.",loading:48}
]

