export const MAX_UPDATED = '2026-10-21';
export const PRICE_TODO = '<PRICE_TODO>';

export const maxSources = {
  falLaunch: 'https://fal.ai/learn/devs/introducing-h3-max-by-fal',
  falModel: 'https://fal.ai/models/minimax/h3-max/text-to-video/api',
  falReferences: 'https://fal.ai/models/minimax/h3-max/reference-to-video/api',
  falPricing: 'https://fal.ai/pricing',
  minimax: 'https://platform.minimax.io/docs/api-reference/video-generation-v2-create',
  minimaxGuide: 'https://platform.minimax.io/docs/guides/video-generation',
  minimaxAudio: 'https://www.minimax.io/news/minimax-h3-open-source',
  official: 'https://www.minimax.io/',
  updates: 'https://www.minimax.io/blog',
  replicate: 'https://replicate.com/',
} as const;

export const maxContent = {
  metadata: {
    title: 'MiniMax H3.1 Max: Capabilities and Cost',
    description: 'Compare the confirmed fal H3 Max variant with MiniMax H3, review sourced capabilities and cost factors, and check the unannounced H3.1 Max status.',
  },
  hero: {
    label: 'MODEL COMPARISON / H3 MAX',
    heading: 'MiniMax H3.1 Max vs H3',
    introduction: 'MiniMax H3.1 Max has not been announced, so a useful comparison starts with the H3 products that can actually be identified today. Here, H3 Max means fal’s post-trained version of MiniMax H3. The tables separate that provider’s model from the MiniMax-hosted H3 service, while the H3.1 Max section keeps unconfirmed information separate from available capabilities.',
    linkLead: 'Prepare a shot and its references in the',
    link: 'MiniMax H3.1 video generator',
    linkTail: 'before choosing which confirmed model and provider fit the deliverable.',
    checked: 'Sources checked',
    compare: 'Compare H3 Max and H3',
    status: 'H3.1 Max · not announced',
  },
  meaning: {
    heading: 'What "Max" means',
    paragraphs: [
      'H3 Max is a confirmed H3-family product name: MiniMax’s current creation reference lists MiniMax-H3-Max, and fal describes its H3 Max offering as a post-trained H3 variant with an optimized inference stack. Provider configurations differ. This page’s comparison labels fal and MiniMax explicitly, rather than assuming every service exposes the same version or output options.',
      'Treat the provider, endpoint, and configuration as part of the model choice. A name containing Max does not automatically mean a larger resolution, every reference mode, or a lower bill. Compare the current documentation for the specific route you plan to call. H3.1 Max does not inherit confirmed specifications merely because its name resembles an available H3 product.',
    ],
    sourceLabel: 'fal’s H3 Max announcement',
    pending: 'Official details not yet announced.',
    pendingLead: 'H3.1 Max specifications:',
  },
  comparison: {
    heading: 'H3 Max vs H3',
    introduction: 'The comparison below identifies the provider in each column. Hosted options can differ from an open-weight local workflow, and provider-reported speed is not an equal-hardware test. Each model cell links to the source for that statement; pricing is deliberately left as a placeholder.',
    columns: ['Capability', 'H3 Max · fal', 'H3 · MiniMax hosted API'],
    rows: [
      { item: 'Resolution', max: { text: '480P, 768P, or 1080P in fal’s current schema. Its 1080P option is latent refinement of native 768P output.', source: maxSources.falModel }, h3: { text: '768P or 2K in the documented creation API.', source: maxSources.minimax } },
      { item: 'Duration', max: { text: '5 seconds by default in fal’s current schema. That schema does not declare a hard minimum or maximum; check the selected route before submission.', source: maxSources.falModel }, h3: { text: '4–15 seconds, using supported whole-second values.', source: maxSources.minimax } },
      { item: 'Audio', max: { text: 'Generated soundtrack; an optional supplied audio track replaces it on the documented text-to-video route.', source: maxSources.falModel }, h3: { text: 'Native stereo audio; the open H3 description specifies a 32 kHz stereo output.', source: maxSources.minimaxAudio } },
      { item: 'Reference materials', max: { text: 'Up to 12 reference files combined. Each video or audio clip is 2–15 seconds, with up to 15 seconds total per modality.', source: maxSources.falReferences }, h3: { text: 'Reference mode allows up to 9 images, 3 videos, and 3 audio files, with 12 files total. Audio references also need a visual input.', source: maxSources.minimaxGuide } },
      { item: 'Speed', max: { text: 'fal reports a 5-second 768p example in under 3 seconds. This is a provider benchmark, not a guaranteed response time or a test by this site.', source: maxSources.falLaunch }, h3: { text: 'No fixed turnaround is promised in the creation reference. Compare actual task completion under your own settings and queue conditions.', source: maxSources.minimax } },
      { item: 'Cost per video', max: { text: PRICE_TODO, source: maxSources.falPricing }, h3: { text: PRICE_TODO, source: maxSources.minimax },
      },
    ],
    note: 'A faster demonstration does not establish a universal speed ratio. Keep resolution, duration, audio, references, and queue conditions comparable before using timing evidence to choose a service.',
    pricingLead: 'Detailed quote comparisons will be collected in the',
    pricingTail: 'when that page is published.',
  },
  availability: {
    heading: 'H3.1 Max status',
    status: 'Official details not yet announced.',
    text: 'As of this review date, we have no official H3.1 Max announcement to cite. This section will be updated after an official release with verified naming, capabilities, and provider availability. Existing H3 Max documentation does not establish a H3.1 Max release date or specification.',
    sourceLabel: 'Check MiniMax official announcements',
    // TODO: Update only after an official H3.1 Max announcement and source review.
  },
  scenarios: {
    heading: 'When Max is worth it',
    introduction: 'These are decision scenarios for the available H3 Max product, not results from a test on this website. Judge the service by the accepted deliverable and your own trial, rather than by the name alone.',
    items: [
      { title: 'Fast creative reviews', text: 'Consider H3 Max when a director needs several interpretations of one short shot before choosing a visual direction. Keep the subject, camera move, and sound brief consistent, then compare the candidates against a simple checklist. The value comes from reducing review friction, provided the provider’s supported output meets your delivery needs. Retain the selected prompt and settings so that later revisions remain understandable to collaborators who did not attend review.' },
      { title: 'Short social campaign studies', text: 'A social campaign often needs variations in framing, opening action, and atmosphere before an editor chooses a cut. Use the same brief across candidates, then inspect each result on the target screen. Consider Max when iteration helps the team choose sooner and its supported format is sufficient. Keep captions, platform delivery checks, and brand approval in the editing process instead of assuming a faster render completes the entire finished campaign.' },
      { title: 'Product concept pitches', text: 'For an early product pitch, a team may need to judge material, light, and camera movement before funding a shoot. Prepare a focused reference pack and identify what must remain recognizable. Consider Max when rapid concept review is more valuable than a delivery format it does not support. Check product shape, labeling, and continuity carefully, then preserve the chosen brief for the next production stage and a clear client conversation.' },
      { title: 'Interactive production sessions', text: 'During a live planning session, long waits can interrupt discussion and make feedback less specific. A low latency provider may help participants compare one controlled revision while the intention is still fresh. Consider Max after a small trial confirms that your queue, settings, and output needs fit that session. Keep a fallback review plan, because a provider benchmark cannot promise that every future generation finishes within the same elapsed time.' },
    ],
  },
  costs: {
    heading: 'Cost per video',
    introduction: 'Every monetary value below remains a placeholder. Record a confirmed provider quote for the exact configuration before using this table for a budget. Provider pricing, this website’s future credit policy, and a temporary promotional allowance are separate things.',
    columns: ['Model', 'Record before quoting', 'Price per video'],
    rows: [
      { model: 'H3 Max · fal', inputs: 'Endpoint, output duration, resolution, and any documented reference-processing charge.', price: PRICE_TODO },
      { model: 'H3 · MiniMax', inputs: 'Generation mode, output settings, and the provider’s current billing terms.', price: PRICE_TODO },
      { model: 'H3.1 Max', inputs: 'Official details not yet announced.', price: PRICE_TODO },
    ],
    explanation: 'To compare a real job, start from its provider’s documented billing unit, then include only charges that provider actually applies. Record how many attempts were required to obtain an accepted clip. A cheap unsuccessful attempt and an expensive accepted take are different outcomes; use the cost of the accepted deliverable as a separate measure from the headline unit rate.',
    pricingLead: 'The dedicated',
    pricingTail: 'will hold verified quote details once published; this comparison does not invent a charge to fill the gap.',
    quoteSource: 'Check fal’s current billing page',
  },
  pricing: { href: '/minimax-h3.1-pricing', published: false, label: 'Pricing guide', status: 'coming soon' },
  alternatives: {
    heading: 'Alternatives',
    introduction: 'Choose the destination for the work you need to do. A platform link is not evidence that it offers an unannounced model, and an account or credit balance on one service should not be assumed to transfer to another.',
    items: [
      { name: 'fal.ai', text: 'Use fal’s published H3 Max playground and API documentation when you want to inspect or try the provider’s confirmed post-trained H3 product.', href: maxSources.falModel },
      { name: 'Replicate', text: 'Use Replicate to explore hosted model APIs and compare its current catalog; this link does not claim that Replicate offers H3.1 Max or fal’s H3 Max.', href: maxSources.replicate },
      { name: 'MiniMax official site', text: 'Use MiniMax directly for the model maker’s announcements, product destinations, and official H3 documentation.', href: maxSources.official },
    ],
  },
  faq: {
    heading: 'FAQ',
    items: [
      { question: 'Is MiniMax H3.1 Max available now?', answer: 'Official details not yet announced. We have no official H3.1 Max release to cite as of this page’s review date. The working comparison concerns fal’s H3 Max and MiniMax’s H3 service. Do not treat the available H3 Max name as evidence that a later numbered model has been announced.' },
      { question: 'Who developed the confirmed H3 Max model?', answer: 'fal describes H3 Max as its post-trained variant of the open-weight MiniMax H3 base model, with inference work performed by fal. That identifies the product discussed here. It does not make this independent website an official MiniMax or fal service, and it does not confirm a model called H3.1 Max.' },
      { question: 'Does Max automatically mean better output for every prompt?', answer: 'No. A provider’s tuning goals and benchmark results do not determine whether a particular shot satisfies your brief. Compare candidates with the same subject, action, camera, and delivery requirements. Record the defects that matter to the project, then choose the service that produces an acceptable result under the conditions you actually use.' },
      { question: 'Are the speed claims on this page measured by this website?', answer: 'No. The speed entry is attributed to fal’s own published example. We have not reproduced that benchmark or established an equal conditions timing comparison with MiniMax’s hosted service. Your completion time can depend on the selected route, settings, references, and queue conditions, so test the workflow you intend to use.' },
      { question: 'How much does one H3 Max video cost?', answer: 'The monetary fields on this page deliberately remain <PRICE_TODO>. Get a current quote from the provider for the selected route and settings before assigning a budget. Include documented extras and the attempts needed for an accepted result. This website has not configured a separate H3 Max credit charge or a checkout offer.' },
      { question: 'Can I reuse the same references with every H3 endpoint?', answer: 'Do not assume that input fields are identical across text, image, and reference routes. Read the selected endpoint’s schema and prepare only the inputs that route accepts. A reference pack may also have combined limits beyond individual file counts. Keep the creative intention consistent while adapting the request to the actual provider interface.' },
      { question: 'Does Replicate provide the same H3 Max service as fal?', answer: 'The alternatives link identifies Replicate as a hosted model platform, not a claim that it operates the same fal endpoint. Check the current model owner, version, and schema in its catalog before choosing a route. Names alone do not establish matching capabilities, billing, licensing terms, or interchangeable provider accounts and credits.' },
      { question: 'Should I wait for H3.1 Max before making my video?', answer: 'Choose based on a confirmed service that meets the current brief rather than an unannounced model name. Prepare a short test and compare the available output against your delivery requirements. If an official H3.1 Max announcement arrives, revisit its verified capabilities and terms before changing an established production workflow or promising new features.' },
    ],
  },
  closing: {
    lead: 'Start with a clear creative brief in the',
    link: 'MiniMax H3.1 video generator',
    tail: 'then use this comparison to identify the provider and configuration you need to evaluate.',
    source: 'Source',
    updated: 'Last updated:',
  },
} as const;
