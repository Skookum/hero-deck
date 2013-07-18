document.write('<link href=\"js/embed-bfcadee384027982121fdeb9930e78b2.css\" media=\"screen\" rel=\"stylesheet\" />')
document.write('<div id=\"gist5991745\" class=\"gist\">\n      <div class=\"gist-file\">\n        <div class=\"gist-data gist-syntax\">\n\n\n\n  <div class=\"file-data\">\n    <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n      <tr>\n        <td class=\"line-numbers\">\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L1\" rel=\"file-abilitybalancesheetcontroller-cs-L1\">1<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L2\" rel=\"file-abilitybalancesheetcontroller-cs-L2\">2<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L3\" rel=\"file-abilitybalancesheetcontroller-cs-L3\">3<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L4\" rel=\"file-abilitybalancesheetcontroller-cs-L4\">4<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L5\" rel=\"file-abilitybalancesheetcontroller-cs-L5\">5<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L6\" rel=\"file-abilitybalancesheetcontroller-cs-L6\">6<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L7\" rel=\"file-abilitybalancesheetcontroller-cs-L7\">7<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L8\" rel=\"file-abilitybalancesheetcontroller-cs-L8\">8<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L9\" rel=\"file-abilitybalancesheetcontroller-cs-L9\">9<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L10\" rel=\"file-abilitybalancesheetcontroller-cs-L10\">10<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L11\" rel=\"file-abilitybalancesheetcontroller-cs-L11\">11<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L12\" rel=\"file-abilitybalancesheetcontroller-cs-L12\">12<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L13\" rel=\"file-abilitybalancesheetcontroller-cs-L13\">13<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L14\" rel=\"file-abilitybalancesheetcontroller-cs-L14\">14<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L15\" rel=\"file-abilitybalancesheetcontroller-cs-L15\">15<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L16\" rel=\"file-abilitybalancesheetcontroller-cs-L16\">16<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L17\" rel=\"file-abilitybalancesheetcontroller-cs-L17\">17<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L18\" rel=\"file-abilitybalancesheetcontroller-cs-L18\">18<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L19\" rel=\"file-abilitybalancesheetcontroller-cs-L19\">19<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L20\" rel=\"file-abilitybalancesheetcontroller-cs-L20\">20<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L21\" rel=\"file-abilitybalancesheetcontroller-cs-L21\">21<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L22\" rel=\"file-abilitybalancesheetcontroller-cs-L22\">22<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L23\" rel=\"file-abilitybalancesheetcontroller-cs-L23\">23<\/span>\n          <span class=\"line-number\" id=\"file-abilitybalancesheetcontroller-cs-L24\" rel=\"file-abilitybalancesheetcontroller-cs-L24\">24<\/span>\n        <\/td>\n        <td class=\"line-data\">\n          <pre class=\"line-pre\"><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC1\"><span class=\"k\">public<\/span> <span class=\"k\">class<\/span> <span class=\"nc\">AbilityBalanceSheetController<\/span> <span class=\"p\">:<\/span> <span class=\"n\">ApiController<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC2\"><span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC3\"><span class=\"na\">    [AbilityWebApiAuthorization(Ability = &quot;PullAssets&quot;)]<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC4\">    <span class=\"k\">public<\/span> <span class=\"n\">IEnumerable<\/span><span class=\"p\">&lt;<\/span><span class=\"kt\">decimal<\/span><span class=\"p\">&gt;<\/span> <span class=\"n\">GetAssets<\/span><span class=\"p\">()<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC5\">    <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC6\">        <span class=\"k\">return<\/span> <span class=\"k\">new<\/span> <span class=\"kt\">decimal<\/span><span class=\"p\">[]<\/span> <span class=\"p\">{<\/span><span class=\"n\">GetCash<\/span><span class=\"p\">(),<\/span> <span class=\"n\">GetReceivables<\/span><span class=\"p\">()};<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC7\">    <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC8\">&nbsp;<\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC9\"><span class=\"na\">    [AbilityWebApiAuthorization(Ability = &quot;PullCash&quot;)]<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC10\">    <span class=\"k\">public<\/span> <span class=\"kt\">decimal<\/span> <span class=\"nf\">GetCash<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span> <span class=\"k\">return<\/span> <span class=\"m\">10000<\/span><span class=\"p\">;<\/span> <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC11\"><span class=\"na\">    [AbilityWebApiAuthorization(Ability = &quot;PullReceivables&quot;)]<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC12\">    <span class=\"k\">public<\/span> <span class=\"kt\">decimal<\/span> <span class=\"nf\">GetReceivables<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span> <span class=\"k\">return<\/span> <span class=\"m\">1000<\/span><span class=\"p\">;<\/span> <span class=\"p\">}<\/span> <\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC13\">&nbsp;<\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC14\"><span class=\"na\">    [AbilityWebApiAuthorization(Ability = &quot;PullLiabilities&quot;)]<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC15\">    <span class=\"k\">public<\/span> <span class=\"n\">IEnumerable<\/span><span class=\"p\">&lt;<\/span><span class=\"kt\">decimal<\/span><span class=\"p\">&gt;<\/span> <span class=\"n\">GetLiabilities<\/span><span class=\"p\">()<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC16\">    <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC17\">        <span class=\"k\">return<\/span> <span class=\"k\">new<\/span> <span class=\"kt\">decimal<\/span><span class=\"p\">[]<\/span> <span class=\"p\">{<\/span><span class=\"n\">GetLongTermDebt<\/span><span class=\"p\">(),<\/span> <span class=\"n\">GetAccruedExpenses<\/span><span class=\"p\">()};<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC18\">    <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC19\">&nbsp;<\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC20\"><span class=\"na\">    [AbilityWebApiAuthorization(Ability = &quot;PullLongTermDebt&quot;)]<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC21\">    <span class=\"k\">public<\/span> <span class=\"kt\">decimal<\/span> <span class=\"nf\">GetLongTermDebt<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span> <span class=\"k\">return<\/span> <span class=\"p\">-<\/span><span class=\"m\">2000<\/span><span class=\"p\">;<\/span> <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC22\"><span class=\"na\">    [AbilityWebApiAuthorization(Ability = &quot;PullAccruedExpenses&quot;)]<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC23\">    <span class=\"k\">public<\/span> <span class=\"kt\">decimal<\/span> <span class=\"nf\">GetAccruedExpenses<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span> <span class=\"k\">return<\/span> <span class=\"p\">-<\/span><span class=\"m\">5000<\/span><span class=\"p\">;<\/span> <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-abilitybalancesheetcontroller-cs-LC24\"><span class=\"p\">}<\/span><\/div><\/pre>\n        <\/td>\n      <\/tr>\n    <\/table>\n  <\/div>\n\n        <\/div>\n\n        <div class=\"gist-meta\">\n          <a href=\"/elaforc/9dd76334c4ab4368c4c2/raw/197d777e8289cd0ab605e94ceb7745e807b4e813/AbilityBalanceSheetController.cs\" style=\"float:right\">view raw<\/a>\n          <a href=\"https://gist.github.com/elaforc/9dd76334c4ab4368c4c2#file-abilitybalancesheetcontroller-cs\" style=\"float:right; margin-right:10px; color:#666;\">AbilityBalanceSheetController.cs<\/a>\n          <a href=\"https://gist.github.com/elaforc/9dd76334c4ab4368c4c2\">This Gist<\/a> brought to you by <a href=\"https://github.com\">GitHub<\/a>.\n        <\/div>\n      <\/div>\n<\/div>\n')
