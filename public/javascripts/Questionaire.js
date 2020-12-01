let data =[
    {id:0,q:"Do you smoke?",yes:1,no:3},
    {id:1,q:"How many packs do you smoke per day? Yes > 5 or No < 5", yes:2,no:3},
    {id:2,q:"Did you have lungs surgery before?",yes:6,no:4},
    {id:3,q:"Do you cough often?",yes:5,no:4},
    {id:4,q:"Good for you!",goto:6},
    {id:5,q:"Sorry to hear that?", goto:6},
    {id:6,q:"We are finalizing your result for smoking",loading:0},
    {id:7,q:"Are you a returning patient?",yes:11, no:8},
    {id:8,q:"Are you enrolled in medicare?", yes:9,no:14},
    {id:9,q:"Do you have two or more diagnoses shown below?",yes:11,no:10},
    {id:10,q:"Implementing the PHQ-9. Click yes if its high/med. Click no if its low.",yes:11,no:15},
    {id:11,q:"Are you enrolled in any Chronic Care Management with any other physician?",yes:15,no:12},
    {id:12,q:"Did you sign the CCM consent form?",yes:13,no:15},
    {id:13,q:"Is this your CCM plan worksheet?", yes:14,no:15},
    {id:14,q:"Remote Patient Monitoring set up screen will populate here. Is this your RPM?",yes:15,no:15},
    {id:15,q:"We are finalizing your result for CCM",yes:15,loading:7}
]

//Call from search question
