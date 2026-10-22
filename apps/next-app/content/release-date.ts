export const RELEASE_UPDATED = '2026-10-22';
// Source check: blog, H3, M3.1 Flash, Hugging Face, GitHub, fal, and Replicate read; news returned navigation only and ModelScope returned no readable body.

export const releaseSources = {
  h3: { label: 'MiniMax H3 announcement', href: 'https://www.minimax.io/blog/minimax-h3' },
  text: { label: 'MiniMax M3.1 Flash announcement', href: 'https://www.minimax.io/blog/minimax-m31f' },
  news: { label: 'MiniMax official news', href: 'https://www.minimax.io/news', unavailable: true },
  blog: { label: 'MiniMax official announcements', href: 'https://www.minimax.io/blog' },
  huggingFace: { label: 'MiniMax on Hugging Face', href: 'https://huggingface.co/MiniMaxAI' },
  modelScope: { label: 'MiniMax official ModelScope model', href: 'https://modelscope.cn/models/MiniMax/MiniMax-H3', unavailable: true },
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
    description: `As of ${RELEASE_UPDATED}, no H3.1 release announcement was found in the official sources checked. Review release history and source-check results.`,
  },
  evidence: { checked: 'Checked', source: 'Source', updated: 'Last updated:', unavailable: 'Not verified today', partial: 'Some sources unavailable' },
  hero: {
    label: 'RELEASE TRACKER / VERIFIED RECORD',
    heading: 'MiniMax H3.1 Release Date',
    introduction: `MiniMax H3.1 release date: as of ${RELEASE_UPDATED}, no official H3.1 release announcement or launch date was found in the MiniMax announcements and official model records checked below. Sources that could not be read are marked separately.`,
    status: 'Official details not yet announced.',
    statusLabel: 'H3.1 release status',
    references: [releaseSources.blog, releaseSources.huggingFace],
    linkLead: 'For the current H3 prompt workspace, open the',
    link: 'MiniMax H3.1 video generator',
    linkTail: 'and organize the subject, movement, framing, and references for your shot.',
    historyLink: 'View confirmed history',
  },
  history: {
    heading: 'Confirmed release history',
    introduction: 'Compare the video-model and text-model announcements by their exact names. The H3 and M3.1 Flash entries below link to their original release posts, with the publication date and product family shown together. Open either post to read the capabilities and product destinations described for that release.',
    references: [releaseSources.h3, releaseSources.text, releaseSources.blog],
    columns: ['Model', 'Release date', 'Product line', 'Dated evidence'],
    rows: [
      { model: 'MiniMax H3', date: '2026-07-31', line: 'Video generation', reference: releaseSources.h3 },
      { model: 'MiniMax M3.1 Flash', date: '2026-10-19', line: 'Text model · not a video release', reference: releaseSources.text },
    ],
  },
  context: {
    heading: "H3.1 Release Date: What's Confirmed So Far",
    introduction: 'Read the H-series announcements for video-model news and the M-series announcements for text-model news. Compare the model name, announcement date, and linked documentation together when reviewing a new post or a model card.',
    references: [releaseSources.h3, releaseSources.text, releaseSources.blog],
    facts: [
      { title: 'H3 is a documented video release', text: 'Open the MiniMax H3 announcement dated 2026-07-31 for the video model’s launch record. The post describes multimodal context across text, images, video, and audio, together with native stereo sound. Follow its product and documentation links to explore H3 workflows and compare those capabilities with the settings required by your shot.', references: [releaseSources.h3] },
      { title: 'M3.1 Flash is a separate text-model announcement', text: 'Read the M3.1 Flash announcement dated 2026-10-19 as a text and agent-model release. Its model name, product description, and publication date identify a different product family from H3 video generation. Use the complete name when following release news so a text-model update stays separate from a video-model announcement.', references: [releaseSources.text] },
    ],
  },
  channels: {
    heading: 'Where H3.1 Will Be Announced',
    introduction: 'Follow MiniMax’s announcements and model organizations for named releases, model cards, and repository documentation.',
    references: [releaseSources.blog, releaseSources.huggingFace],
    items: [
      { title: 'MiniMax official announcements', text: 'MiniMax publishes model launch posts with product names, publication dates, and links to documentation.', reference: releaseSources.blog },
      { title: 'Hugging Face · MiniMaxAI', text: 'The MiniMaxAI organization hosts model repositories and model cards. Read the named repository for release documentation and file information.', reference: releaseSources.huggingFace },
      { title: 'ModelScope · MiniMax publisher', text: 'The MiniMax H3 model page identifies its publisher and provides the model record. Follow the publisher to inspect its other releases.', reference: releaseSources.modelScope },
      { title: 'GitHub · MiniMax-AI', text: 'MiniMax-AI hosts repositories with documentation, release notes, and links to model resources.', reference: releaseSources.github },
    ],
  },
  changes: {
    heading: 'What Changes on Launch Day',
    paragraphs: [
      'Connect the confirmed MiniMax H3.1 route after checking provider access and the accepted request format. Run a complete request through that route, review the returned output, and align the tool controls with the model’s documented settings.',
      'Add the official H3.1 announcement to the release history with its publication date and a direct evidence link. Retain the H3 and M3.1 Flash entries so readers can compare the named releases in their respective product families.',
      'Update the homepage model label, prompt guidance, and capability information to match the verified route. Revise the Max, ComfyUI, and Pricing guides when their corresponding documentation, weight packages, and provider quotes are available.',
    ],
    target: 'Target: switch to MiniMax H3.1 within 4 hours of a confirmed official release.',
  },
  faq: {
    heading: 'FAQ',
    items: [
      { question: 'When is MiniMax H3.1 coming out?', answer: `Official details not yet announced. As of ${RELEASE_UPDATED}, the official sources checked for this page do not establish an H3.1 release or release date. The history table records confirmed products separately. Use the linked MiniMax announcement index and model organization to verify a newly named release before assigning it a date.`, references: [releaseSources.blog, releaseSources.huggingFace] },
      { question: 'Is the H3.1 release date officially confirmed by MiniMax?', answer: 'No confirmed H3.1 release date is recorded in the official sources checked on this page’s review date. Read the named MiniMax announcement and model-maker record for a publication date associated with that product. The history table preserves the available H3 and M3.1 Flash entries. The links beside this answer identify the records reviewed.', references: [releaseSources.blog, releaseSources.huggingFace] },
      { question: 'What is the confirmed MiniMax H3 release date?', answer: 'The official MiniMax H3 announcement is dated 2026-07-31. That is the H3 entry in this page’s release-history table, with a direct link to the original post. Keep that date attached to H3 when comparing versions; the existing release record does not establish a later H3.1 launch or its capabilities.', references: [releaseSources.h3] },
      { question: 'Are H3.1 and M3.1 Flash the same model?', answer: 'The official M3.1 Flash post dated 2026-10-19 describes a text-model release. The H3 post concerns the video-model line. Those are separately named official records, and the M3.1 Flash announcement does not announce an H3.1 video model. Check the full product name and description before treating similar version numbers as the same release.', references: [releaseSources.text, releaseSources.h3] },
      { question: 'Will there be a free H3.1 trial?', answer: 'Read the terms of the provider when an offer appears. Check the exact model name, eligibility, included allowance, and any claim or expiry conditions together. Compare those terms with the generation configuration you intend to use, and keep the offer’s direct link with your notes for the relevant account.', references: [releaseSources.blog, releaseSources.pricing] },
      { question: 'Where can I check an H3.1 announcement myself?', answer: 'Start with MiniMax’s official announcement index and its model-maker organizations, then inspect the exact named release or model card. Use provider catalogs separately to check hosted access. Record both the date shown by the relevant source and the date you checked it, preserving a direct URL so someone else can review the same evidence.', references: [releaseSources.blog, releaseSources.huggingFace, releaseSources.github] },
      { question: 'Does a fal or Replicate listing establish MiniMax’s launch date?', answer: 'A provider catalog documents what that service lists. For an official MiniMax release claim, also keep a direct MiniMax announcement or model-maker release record. Compare the exact name and version in both records, and retain their individual dates. This avoids replacing the model maker’s release history with a different service’s availability record.', references: [releaseSources.blog, releaseSources.fal, releaseSources.replicate] },
      { question: 'What changes after a confirmed H3.1 release?', answer: 'Update the tool route, release-history table, and homepage version information using the confirmed announcement and documentation. Check provider access and the accepted request settings, run a complete request, and review the returned output. Add direct evidence links to the release entry, then align the model guides with their corresponding sources.', references: [releaseSources.thisPage, releaseSources.home] },
    ],
  },
  closing: {
    lead: 'Keep working on the current brief in the',
    link: 'MiniMax H3.1 video generator',
    tail: 'and return to the release history when you need the official announcement links.',
  },
} as const;
