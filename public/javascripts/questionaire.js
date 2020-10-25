let data =[
    {id:0,q:"Do you smoke?",yes:1,no:3},
    {id:1,q:"How many packs do you smoke per day? Yes > 5 or No N 5", yes:2,no:3},
    {id:2,q:"Did you have lungs surgery before?",yes:6,no:4},
    {id:3,q:"Do you cough often?",yes:5,no:4},
    {id:4,q:"Good for you",goto:6},
    {id:5,q:"Sorry to hear that?", goto:6},
    {id:6,q:"We are finalizing your result for smoking",goto:7},
    {id:7,q:"Are you a returning patient?",yes:11, no:8},
    {id:8,q:"Are you enrolled in medicare?", yes:9,no:13},
    {id:9,q:"Do you have two or more diagnoses shown below?",yes:11,no:13},
    {id:10,q:"Are you enrolled in any Chronic Care Management with any other physician?",yes:13,no:11},
    {id:11,q:"Did you sign the CCM consent form?",yes:12,no:13},
    {id:12,q:"Is this your CCM plan worksheet?", yes:13,no:13},
    {id:13,q:"We are finalizing your result for CCM",yes:13,loading:7}
]