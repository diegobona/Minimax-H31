export const RELEASE_UPDATED = '2026-10-21';

export const releaseSources = {
  h3: { label: 'MiniMax H3 announcement', href: 'https://www.minimax.io/blog/minimax-h3' },
  text: { label: 'MiniMax M3.1 Flash announcement', href: 'https://www.minimax.io/blog/minimax-m31f' },
  news: { label: 'MiniMax official news', href: 'https://www.minimax.io/news' },
  blog: { label: 'MiniMax official announcements', href: 'https://www.minimax.io/blog' },
  huggingFace: { label: 'MiniMax on Hugging Face', href: 'https://huggingface.co/MiniMaxAI' },
  modelScope: { label: 'MiniMax official ModelScope model', href: 'https://modelscope.cn/models/MiniMax/MiniMax-H3' },
  github: { label: 'MiniMax GitHub organization', href: 'https://github.com/MiniMax-AI' },
  fal: { label: 'MiniMax models on fal', href: 'https://fal.ai/explore/minimax' },
  replicate: { label: 'MiniMax models on Replicate', href: 'https://replicate.com/minimax' },
  home: { label: 'Current site workspace', href: '/#generator' },
  pricing: { label: 'Site credit-pack preview', href: '/minimax-h3.1-pricing' },
  thisPage: { label: 'Site update policy', href: '#site-updates' },
} as const;

export const releaseContent = {
  metadata: {
    title: 'MiniMax H3.1 Release Date: What We Know',
    description: 'As of October 21, 2026, MiniMax has not released H3.1 or announced its release date. Check dated official sources, release history, and verification steps.',
  },
  evidence: { checked: 'Checked', source: 'Source', updated: 'Last updated:' },
  hero: {
    label: 'RELEASE TRACKER / VERIFIED RECORD',
    heading: 'MiniMax H3.1 Release Date',
    introduction: 'MiniMax H3.1 release date: as of 2026-10-21, MiniMax has not released MiniMax H3.1 or announced its release date. There is no official H3.1 launch date to report from the sources checked below.',
    status: 'Official details not yet announced.',
    statusLabel: 'H3.1 release status',
    references: [releaseSources.blog, releaseSources.huggingFace],
    linkLead: 'For the current H3 prompt workspace, open the',
    link: 'MiniMax H3.1 video generator',
    linkTail: 'and check the model and connection status shown above its controls.',
    historyLink: 'View confirmed history',
  },
  history: {
    heading: 'Confirmed release history',
    introduction: 'This record separates the video model from the similarly numbered text model. A date belongs to the named product in its linked announcement; it is not a schedule for another model. The H3 and M3.1 Flash entries below link to their separate official release posts. The final row records the H3.1 status at the page’s review date.',
    references: [releaseSources.h3, releaseSources.text, releaseSources.blog],
    columns: ['Model', 'Release date', 'Product line', 'Dated evidence'],
    rows: [
      { model: 'MiniMax H3', date: '2026-07-31', line: 'Video generation', reference: releaseSources.h3 },
      { model: 'MiniMax M3.1 Flash', date: '2026-10-19', line: 'Text model · not a video release', reference: releaseSources.text },
      { model: 'MiniMax H3.1', date: 'Official details not yet announced.', line: 'No confirmed release entry', reference: releaseSources.blog },
    ],
  },
  context: {
    heading: 'Why an H3.1 is expected but unconfirmed',
    introduction: 'The official record supports the named releases below. It does not establish an H3.1 product plan, a development timetable, or a relationship between an M-series text release and an H-series video release. The useful distinction is the exact model named by each source, together with its publication date and the date on which it was checked.',
    references: [releaseSources.h3, releaseSources.text, releaseSources.blog],
    facts: [
      { title: 'H3 is a documented video release', text: 'The official MiniMax H3 announcement is dated 2026-07-31 and identifies the H3 video model. This is the confirmed MiniMax H3 release date in the history table. The record belongs to H3; it does not supply a date or specification for a differently numbered H3.1 model.', references: [releaseSources.h3] },
      { title: 'M3.1 Flash is a separate text-model announcement', text: 'The official M3.1 Flash announcement is dated 2026-10-19. It concerns the text-model line, rather than a new video model called H3.1 or Hailuo 3.1. Its model name, product description, and publication date are recorded separately so that the similar version numbers do not merge two different announcements.', references: [releaseSources.text] },
      { title: 'An official H3.1 release remains unconfirmed', text: 'Official details not yet announced. As of this page’s check date, the reviewed MiniMax announcement index and official model organization do not provide an H3.1 release announcement or release date. This is a dated source check, not a statement by MiniMax promising a future model or a specific launch schedule.', references: [releaseSources.blog, releaseSources.huggingFace] },
    ],
  },
  channels: {
    heading: 'Where the announcement will appear first',
    introduction: 'Official details not yet announced. No official H3.1 publication order is available in the checked record. Use the following destinations to verify announcements and availability; this list does not promise that any particular service will publish first. Model-maker records establish an announcement, while provider catalogs establish what that provider actually lists.',
    references: [releaseSources.blog, releaseSources.huggingFace],
    items: [
      { title: 'Hugging Face · MiniMax organization', text: 'Check the model-maker organization and read the exact repository name, model card, and dated release record. A card for an available H3 model should be recorded under H3, rather than renamed to H3.1 in a comparison or download guide.', reference: releaseSources.huggingFace },
      { title: 'ModelScope · MiniMax publisher', text: 'Start with the official H3 model page linked by MiniMax and check its MiniMax publisher. Follow the publisher to inspect its model records. Keep the precise model name and release date from the relevant card, then match them to a primary announcement.', reference: releaseSources.modelScope },
      { title: 'GitHub · MiniMax organization', text: 'Use the model maker’s organization to inspect a linked repository, its release notes, and its documentation. Keep repository activity separate from the wording of a product launch: a dated update to an existing project is evidence for that update.', reference: releaseSources.github },
      { title: 'MiniMax official news', text: 'Read the complete announcement, including its date and the exact product family. Preserve a direct link to the relevant post instead of citing a search result or a headline alone. Use the existing H3 and M3.1 Flash posts as separately named historical records.', reference: releaseSources.news },
      { title: 'fal.ai model catalog', text: 'Inspect the model owner, version, route, and provider documentation when checking hosted availability. Record a fal listing as provider evidence, alongside a MiniMax announcement for any claim about the model maker’s launch. Keep the two dates separate if the records differ.', reference: releaseSources.fal },
      { title: 'Replicate MiniMax model catalog', text: 'Inspect the publisher and the exact listed model before choosing a hosted route. Link to the listing that actually exists and read its documentation. Treat catalog availability as a record for that service, with its own check date and supported model name.', reference: releaseSources.replicate },
    ],
  },
  verify: {
    heading: 'How to verify yourself',
    introduction: 'A short record is easier to audit than an unsupported countdown. Follow these four steps to answer “when is MiniMax H3.1 coming out” without turning a search phrase into a release claim. Save the source URL, the product named by that source, and the date you checked it so another reader can repeat the same process.',
    references: [releaseSources.blog],
    steps: [
      { title: 'Match the exact product name', text: 'Open the official announcement and read beyond its headline. Check whether the text names H3, H3.1, or M3.1 Flash and whether it describes video or text generation. Keep the model name exactly as published in your notes.', references: [releaseSources.h3, releaseSources.text] },
      { title: 'Record the announcement date and availability separately', text: 'Use the date on the relevant official release record for a launch claim. For downloads, inspect the model-maker organization and its model card as well. Keep the source’s publication date and your own check date as separate fields.', references: [releaseSources.blog, releaseSources.huggingFace] },
      { title: 'Check the provider route you intend to use', text: 'Open the provider’s model listing and documentation. Record the publisher, exact version, available route, and any access conditions. A provider listing answers a service-availability question; pair it with the model maker’s announcement when reporting an official release.', references: [releaseSources.fal, releaseSources.replicate] },
      { title: 'Leave an unconfirmed date unassigned', text: 'If the checked sources do not establish an H3.1 date, keep the date field unfilled and retain your links and check date. Revisit those primary records when a named announcement appears; do not derive a launch day from another model’s version number.', references: [releaseSources.blog] },
    ],
  },
  changes: {
    heading: 'What changes on our site',
    introduction: 'Our published target is to update the site within 24 hours of a confirmed official H3.1 release. This is this website’s update policy, not a MiniMax release commitment. The current homepage identifies H3 and states that live generation is not yet connected. Switching a version label alone does not establish that a working H3.1 generation route is available.',
    references: [releaseSources.home, releaseSources.thisPage],
    columns: ['Within 24 hours of a confirmed release', 'Update we will make', 'Record'],
    rows: [
      { item: 'Tool model', action: 'Switch to the confirmed H3.1 route after access and a working integration are verified; disclose the active model and connection status.', reference: releaseSources.home },
      { item: 'Release history', action: 'Add a dated H3.1 release entry with a direct official source and retain the H3 and M3.1 Flash records.', reference: { label: 'Release-history record', href: '#release-history' } },
      { item: 'Homepage version', action: 'Update the homepage model label and dated explanation to match the route that the tool actually uses.', reference: releaseSources.home },
    ],
    note: 'If verified access or the live integration is unavailable, the page will show that condition and retain the actual active model. The 24-hour target is not evidence of a release date, an automatic deployment, or an already connected API. A revised record will identify its source and update date so readers can distinguish a policy from a completed model switch.',
    noteReferences: [releaseSources.home, releaseSources.thisPage],
  },
  faq: {
    heading: 'FAQ',
    items: [
      { question: 'When is MiniMax H3.1 coming out?', answer: 'Official details not yet announced. As of 2026-10-21, the official sources checked for this page do not establish an H3.1 release or release date. The history table records confirmed products separately. Use the linked MiniMax announcement index and model organization to verify a newly named release before assigning it a date.', references: [releaseSources.blog, releaseSources.huggingFace] },
      { question: 'Is the H3.1 release date officially confirmed by MiniMax?', answer: 'No confirmed H3.1 release date is recorded in the official sources checked on this page’s review date. This independent website is reporting that dated check, rather than quoting MiniMax announcing a future launch. The links beside the answer identify the records reviewed; the page title itself is not an official model announcement.', references: [releaseSources.blog, releaseSources.huggingFace] },
      { question: 'What is the confirmed MiniMax H3 release date?', answer: 'The official MiniMax H3 announcement is dated 2026-07-31. That is the H3 entry in this page’s release-history table, with a direct link to the original post. Keep that date attached to H3 when comparing versions; the existing release record does not establish a later H3.1 launch or its capabilities.', references: [releaseSources.h3] },
      { question: 'Are H3.1 and M3.1 Flash the same model?', answer: 'The official M3.1 Flash post dated 2026-10-19 describes a text-model release. The H3 post concerns the video-model line. Those are separately named official records, and the M3.1 Flash announcement does not announce an H3.1 video model. Check the full product name and description before treating similar version numbers as the same release.', references: [releaseSources.text, releaseSources.h3] },
      { question: 'Is Hailuo 3.1 release date another confirmed name for H3.1?', answer: 'Official details not yet announced. This page has no official source establishing “Hailuo 3.1” as an announced product name or giving it a release date. A search phrase does not supply that missing announcement. Read the exact model name in the linked MiniMax records before treating two names as interchangeable.', references: [releaseSources.blog] },
      { question: 'Will there be a free H3.1 trial?', answer: 'Official details not yet announced. No H3.1 trial allowance is confirmed by the official records checked here. This website’s separate credit page also marks its own free allowances as pending and purchases as disabled. Read the terms of the actual service when an offer appears, rather than assuming another platform’s credits transfer here.', references: [releaseSources.blog, releaseSources.pricing] },
      { question: 'Where can I check an H3.1 announcement myself?', answer: 'Start with MiniMax’s official announcement index and its model-maker organizations, then inspect the exact named release or model card. Use provider catalogs separately to check hosted access. Record both the date shown by the relevant source and the date you checked it, preserving a direct URL so someone else can review the same evidence.', references: [releaseSources.blog, releaseSources.huggingFace, releaseSources.github] },
      { question: 'Does a fal or Replicate listing establish MiniMax’s launch date?', answer: 'A provider catalog documents what that service lists. For an official MiniMax release claim, also keep a direct MiniMax announcement or model-maker release record. Compare the exact name and version in both records, and retain their individual dates. This avoids replacing the model maker’s release history with a different service’s availability record.', references: [releaseSources.blog, releaseSources.fal, releaseSources.replicate] },
      { question: 'What happens to this website after a confirmed H3.1 release?', answer: 'Our target is to update the tool, release-history table, and homepage model label within 24 hours of a verified official release. A working model switch also requires verified access and integration. The site will identify its actual active model and connection status; the target is our own update policy, not MiniMax announcing a date.', references: [releaseSources.thisPage, releaseSources.home] },
    ],
  },
  closing: {
    lead: 'Keep working on the current brief in the',
    link: 'MiniMax H3.1 video generator',
    tail: 'and use its active-model notice alongside this dated release record.',
  },
} as const;
