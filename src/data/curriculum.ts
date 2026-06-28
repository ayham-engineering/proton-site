export const TRACK_ORDER = ["training", "qualifying", "developing"] as const;
export type TrackKey = (typeof TRACK_ORDER)[number];

export const SAMPLE_MODULE_ID = "qualifying-data-collection";

export const MODULE_IDS: Record<TrackKey, string[]> = {
  training: ["training-1", "training-2", "training-3", "training-4"],
  qualifying: ["qualifying-1", SAMPLE_MODULE_ID, "qualifying-3", "qualifying-4"],
  developing: ["developing-1", "developing-2", "developing-3"],
};

export interface ModuleDetailContent {
  objectives: string[];
  tools: string[];
  steps: string[];
  deliverable: string;
  note?: string;
}

export interface ModuleContent {
  title: string;
  desc: string;
  detail: ModuleDetailContent;
}

export interface TrackContent {
  label: string;
  desc: string;
}

export interface LangContent {
  tracks: Record<TrackKey, TrackContent>;
  modules: Record<string, ModuleContent>;
}

export const CURRICULUM: Record<"ar" | "en", LangContent> = {
  ar: {
    tracks: {
      training: {
        label: "تدريب",
        desc: "بناء أساس متين في التعلم الآلي والتعلم المعزز والتعلم بالتقليد.",
      },
      qualifying: {
        label: "تأهيل",
        desc: "شهادة عملية كاملة عبر خط الأنابيب الحقيقي: من البيانات إلى النشر.",
      },
      developing: {
        label: "تطوير",
        desc: "مشاريع متقدمة لخدمة الصناعة العراقية، وتوجيه الدفعة القادمة من المتدربين.",
      },
    },
    modules: {
      "training-1": {
        title: "أساسيات بايثون وبيئات المحاكاة",
        desc: "إعداد أدوات العمل وتجربة أول بيئة محاكاة بسيطة.",
        detail: {
          objectives: [
            "إعداد بيئة بايثون والمكتبات الأساسية",
            "تشغيل أول بيئة محاكاة بسيطة والتفاعل معها برمجيًا",
          ],
          tools: ["Python", "بيئة محاكاة بسيطة (Gymnasium)"],
          steps: [
            "تثبيت الأدوات وإعداد بيئة العمل",
            "كتابة سكربت يتفاعل مع بيئة محاكاة بسيطة",
            "تسجيل ملاحظات حول سلوك البيئة",
          ],
          deliverable: "سكربت بايثون يشغّل بيئة محاكاة بسيطة وينفّذ خطوات عشوائية.",
        },
      },
      "training-2": {
        title: "مبادئ الشبكات العصبية والتعلم الآلي",
        desc: "فهم كيف تتعلم الشبكات العصبية من البيانات.",
        detail: {
          objectives: [
            "فهم بنية الشبكة العصبية البسيطة وكيف تتعلم من البيانات",
            "تجربة تدريب نموذج تصنيف صغير",
          ],
          tools: ["PyTorch", "دفتر تمارين (Notebook)"],
          steps: [
            "مراجعة مفاهيم الانحدار والتصنيف",
            "بناء وتدريب شبكة عصبية صغيرة",
            "تقييم دقة النموذج على بيانات اختبار",
          ],
          deliverable: "نموذج تصنيف مدرَّب على مجموعة بيانات بسيطة مع تقرير دقة.",
        },
      },
      "training-3": {
        title: "مقدمة في التعلم المعزز",
        desc: "المكافأة، السياسة، والقرار المتسلسل عبر تمارين مبسطة.",
        detail: {
          objectives: [
            "فهم مكونات التعلم المعزز: الحالة، الفعل، المكافأة، السياسة",
            "تدريب عامل بسيط على مهمة تحكم كلاسيكية",
          ],
          tools: ["Gymnasium", "خوارزمية RL أساسية (مثل Q-Learning)"],
          steps: [
            "استعراض حلقة التفاعل بين العامل والبيئة",
            "تدريب عامل بسيط على مهمة كلاسيكية (مثل CartPole)",
            "تحليل منحنى المكافأة عبر الحلقات",
          ],
          deliverable: "عامل تعلّم معزز مدرَّب يحل مهمة تحكم بسيطة، مع منحنى أداء.",
        },
      },
      "training-4": {
        title: "مقدمة في التعلم بالتقليد",
        desc: "تعلّم سلوك من عروض توضيحية بدل المكافأة المباشرة.",
        detail: {
          objectives: [
            "فهم الفرق بين التعلم المعزز والتعلم بالتقليد",
            "تدريب سياسة بسيطة من عروض توضيحية مسجّلة مسبقًا",
          ],
          tools: ["PyTorch", "مجموعة بيانات عروض توضيحية جاهزة (تمرين)"],
          steps: [
            "مراجعة مفهوم التعلم من العروض التوضيحية",
            "تدريب سياسة استنساخ سلوك (behavior cloning) بسيطة",
            "مقارنة أداء السياسة بسلوك العرض التوضيحي الأصلي",
          ],
          deliverable: "سياسة استنساخ سلوك مدرَّبة على مجموعة بيانات تمرينية صغيرة.",
        },
      },
      "qualifying-1": {
        title: "تشغيل الذراع الروبوتية والتحكم اليدوي",
        desc: "إعداد الذراع الحقيقية والتحكم بها يدويًا بأمان.",
        detail: {
          objectives: [
            "تشغيل الذراع الروبوتية بأمان والتعرف على حدودها الحركية",
            "التحكم بالذراع يدويًا عبر واجهة تيليوبريشن",
          ],
          tools: ["الذراع الروبوتية الحقيقية", "واجهة تيليوبريشن (ذراع قائد/تابع)"],
          steps: [
            "إجراء فحص أمان قبل التشغيل",
            "التحكم بالذراع يدويًا لتنفيذ حركات بسيطة",
            "التعرف على حالات الإيقاف الطارئ",
          ],
          deliverable: "قائمة فحص أمان موقّعة، وتنفيذ ناجح لخمس حركات يدوية بسيطة.",
        },
      },
      [SAMPLE_MODULE_ID]: {
        title: "جمع بيانات العرض التوضيحي على الذراع الروبوتية",
        desc: "تسجيل عروض توضيحية حقيقية وبناء مجموعة بيانات جاهزة للتدريب.",
        detail: {
          objectives: [
            "إعداد الذراع الروبوتية وكاميرات التتبع للمهمة المستهدفة",
            "تنفيذ عشرات الإعادات للمهمة عبر التحكم اليدوي (تيليوبريشن)",
            "مراجعة الحلقات المسجَّلة وتصفية العروض غير النظيفة",
            "تسمية وتنظيم مجموعة البيانات النهائية بصيغة موحّدة",
          ],
          tools: ["LeRobot", "واجهة التحكم اليدوي (تيليوبريشن)", "تسجيل وإدارة مجموعات البيانات"],
          steps: [
            "إعداد الذراع وكاميرات التتبع للمهمة المستهدفة",
            "تنفيذ عشرات الإعادات للمهمة عبر التحكم اليدوي",
            "مراجعة الحلقات المسجَّلة وتصفية العروض غير النظيفة",
            "تسمية وتنظيم مجموعة البيانات النهائية بصيغة موحّدة",
          ],
          deliverable: "مجموعة بيانات عروض توضيحية موسومة ومُراجعة، جاهزة لتدريب سياسة ACT.",
          note: "المحتوى الكامل لهذا المنهج متاح في توثيق المنصة. المحرك المفتوح المصدر الأساسي هو LeRobot، وبروتون تبني فوقه بنية تربوية خاصة بها — تسلسل وحدات، مراجعات أقران، ومعايير تقييم.",
        },
      },
      "qualifying-3": {
        title: "تدريب سياسة ACT",
        desc: "تدريب سياسة تعلّم بالتقليد على البيانات المجمّعة.",
        detail: {
          objectives: [
            "فهم بنية سياسة ACT (Action Chunking Transformer)",
            "تدريب سياسة على مجموعة البيانات المجمّعة في الوحدة السابقة",
          ],
          tools: ["LeRobot", "PyTorch", "وحدة معالجة رسومية (GPU) للتدريب"],
          steps: [
            "إعداد إعدادات التدريب (hyperparameters) الأساسية",
            "تشغيل تدريب السياسة وتتبّع منحنى الخسارة",
            "حفظ نقاط تفتيش (checkpoints) للنموذج",
          ],
          deliverable: "نقطة تفتيش لسياسة ACT مدرَّبة، جاهزة للتقييم على الذراع.",
        },
      },
      "qualifying-4": {
        title: "تقييم ونشر السياسة على العتاد الحقيقي",
        desc: "قياس الأداء الفعلي وتشخيص حالات الفشل.",
        detail: {
          objectives: [
            "نشر السياسة المدرَّبة على الذراع الحقيقية",
            "قياس معدل النجاح وتشخيص حالات الفشل",
          ],
          tools: ["LeRobot", "الذراع الروبوتية الحقيقية", "سجلات تنفيذ (logs)"],
          steps: [
            "تحميل نقطة التفتيش وتشغيلها على الذراع",
            "تنفيذ سلسلة محاولات وتسجيل النتائج",
            "تصنيف حالات الفشل وتحديد أسبابها",
          ],
          deliverable: "تقرير تقييم يضم معدل النجاح وتصنيف حالات الفشل.",
        },
      },
      "developing-1": {
        title: "تصميم مشروع روبوت صناعي",
        desc: "اختيار مهمة حقيقية من احتياجات الصناعة المحلية.",
        detail: {
          objectives: [
            "تحديد مهمة صناعية حقيقية مناسبة كمشروع تطوير",
            "تصميم نطاق المشروع وخطة تنفيذ مبدئية",
          ],
          tools: ["مقابلات/زيارات ميدانية", "وثيقة تصميم المشروع"],
          steps: [
            "تحديد احتياج صناعي محلي قابل للأتمتة",
            "تحديد نطاق المهمة والمخرجات المتوقعة",
            "كتابة وثيقة تصميم أولية ومراجعتها مع المرشد",
          ],
          deliverable: "وثيقة تصميم مشروع معتمدة من المرشد.",
        },
      },
      "developing-2": {
        title: "تحسين الأداء ومعالجة حالات الفشل",
        desc: "رفع موثوقية السياسة في ظروف العالم الحقيقي.",
        detail: {
          objectives: [
            "تحسين موثوقية السياسة تحت ظروف تشغيل متغيّرة",
            "بناء استراتيجية تعامل مع حالات الفشل المتكررة",
          ],
          tools: ["LeRobot", "سجلات تشخيصية", "بيانات إضافية مستهدفة"],
          steps: [
            "تحليل أنماط الفشل من مرحلة التأهيل",
            "جمع بيانات إضافية تستهدف نقاط الضعف",
            "إعادة التدريب وقياس التحسن",
          ],
          deliverable: "نسخة محسَّنة من السياسة مع مقارنة أداء قبل/بعد.",
        },
      },
      "developing-3": {
        title: "الإرشاد وبناء مواد تدريبية",
        desc: "نقل المعرفة للدفعة القادمة من المتدربين.",
        detail: {
          objectives: [
            "توثيق تجربة التعلم الشخصية بشكل قابل لإعادة الاستخدام",
            "إرشاد متدرب من الدفعة القادمة عبر وحدة واحدة على الأقل",
          ],
          tools: ["توثيق المنصة", "جلسات إرشاد مباشرة"],
          steps: [
            "تلخيص أهم الدروس المستفادة من المسار الشخصي",
            "إعداد ملاحظات أو مواد مساعدة لوحدة محددة",
            "إرشاد متدرب جديد عمليًا عبر تلك الوحدة",
          ],
          deliverable: "مادة إرشادية مكتوبة، وجلسة إرشاد واحدة موثّقة على الأقل.",
        },
      },
    },
  },
  en: {
    tracks: {
      training: {
        label: "Training",
        desc: "Building a solid foundation in machine learning, RL, and imitation learning.",
      },
      qualifying: {
        label: "Qualifying",
        desc: "A full hands-on certification across the real pipeline: data to deployment.",
      },
      developing: {
        label: "Developing",
        desc: "Advanced projects for Iraqi industry, mentoring the next cohort of trainees.",
      },
    },
    modules: {
      "training-1": {
        title: "Python & simulation foundations",
        desc: "Setting up tooling and running a first simple simulated environment.",
        detail: {
          objectives: [
            "Set up a Python environment and core libraries",
            "Run and interact with a first simple simulated environment programmatically",
          ],
          tools: ["Python", "A simple Gymnasium-style simulation environment"],
          steps: [
            "Install tooling and set up the working environment",
            "Write a script that interacts with a simple simulated environment",
            "Record observations about the environment's behavior",
          ],
          deliverable: "A Python script that runs a simple simulation environment and takes random steps.",
        },
      },
      "training-2": {
        title: "Neural network & ML principles",
        desc: "Understanding how neural networks learn from data.",
        detail: {
          objectives: [
            "Understand a simple neural network's structure and how it learns from data",
            "Train a small classification model hands-on",
          ],
          tools: ["PyTorch", "Practice notebook"],
          steps: [
            "Review regression and classification concepts",
            "Build and train a small neural network",
            "Evaluate model accuracy on test data",
          ],
          deliverable: "A trained classification model on a simple dataset with an accuracy report.",
        },
      },
      "training-3": {
        title: "Intro to reinforcement learning",
        desc: "Reward, policy, and sequential decisions through simplified exercises.",
        detail: {
          objectives: [
            "Understand RL's core components: state, action, reward, policy",
            "Train a simple agent on a classic control task",
          ],
          tools: ["Gymnasium", "A basic RL algorithm (e.g. Q-Learning)"],
          steps: [
            "Walk through the agent-environment interaction loop",
            "Train a simple agent on a classic task (e.g. CartPole)",
            "Analyze the reward curve across episodes",
          ],
          deliverable: "A trained RL agent solving a simple control task, with a performance curve.",
        },
      },
      "training-4": {
        title: "Intro to imitation learning",
        desc: "Learning behavior from demonstrations instead of direct reward.",
        detail: {
          objectives: [
            "Understand the difference between RL and imitation learning",
            "Train a simple policy from pre-recorded demonstrations",
          ],
          tools: ["PyTorch", "A ready-made practice demonstration dataset"],
          steps: [
            "Review the concept of learning from demonstrations",
            "Train a simple behavior-cloning policy",
            "Compare the policy's behavior to the original demonstrations",
          ],
          deliverable: "A behavior-cloning policy trained on a small practice dataset.",
        },
      },
      "qualifying-1": {
        title: "Operating the arm & teleoperation",
        desc: "Setting up the real arm and controlling it safely by hand.",
        detail: {
          objectives: [
            "Operate the robot arm safely and learn its kinematic limits",
            "Control the arm manually via a teleoperation interface",
          ],
          tools: ["The real robot arm", "Teleoperation interface (leader/follower arm)"],
          steps: [
            "Perform a pre-operation safety check",
            "Manually control the arm through simple movements",
            "Practice emergency-stop procedures",
          ],
          deliverable: "A signed safety checklist and five successfully completed manual movements.",
        },
      },
      [SAMPLE_MODULE_ID]: {
        title: "Collecting demonstration data on the robot arm",
        desc: "Recording real demonstrations and building a training-ready dataset.",
        detail: {
          objectives: [
            "Set up the robot arm and tracking cameras for the target task",
            "Perform dozens of repetitions of the task via teleoperation",
            "Review recorded episodes and filter out unclean demonstrations",
            "Label and organize the final dataset in a standardized format",
          ],
          tools: ["LeRobot", "Teleoperation interface", "Dataset recording & versioning"],
          steps: [
            "Set up the arm and tracking cameras for the target task",
            "Perform dozens of repetitions of the task via teleoperation",
            "Review recorded episodes and filter out unclean demonstrations",
            "Label and organize the final dataset in a standardized format",
          ],
          deliverable: "A labeled, reviewed demonstration dataset ready for ACT policy training.",
          note: "The full module content lives in the platform's documentation. The underlying open-source engine is LeRobot, with Proton's own pedagogical structure — module sequencing, peer review, and evaluation rubrics — layered on top.",
        },
      },
      "qualifying-3": {
        title: "Training an ACT policy",
        desc: "Training an imitation-learning policy on the collected data.",
        detail: {
          objectives: [
            "Understand the ACT (Action Chunking Transformer) policy architecture",
            "Train a policy on the dataset collected in the previous module",
          ],
          tools: ["LeRobot", "PyTorch", "A GPU for training"],
          steps: [
            "Configure baseline training hyperparameters",
            "Run policy training and track the loss curve",
            "Save model checkpoints",
          ],
          deliverable: "A trained ACT policy checkpoint, ready for evaluation on the arm.",
        },
      },
      "qualifying-4": {
        title: "Evaluating & deploying on real hardware",
        desc: "Measuring real-world performance and diagnosing failure cases.",
        detail: {
          objectives: [
            "Deploy the trained policy to the real arm",
            "Measure success rate and diagnose failure cases",
          ],
          tools: ["LeRobot", "The real robot arm", "Execution logs"],
          steps: [
            "Load the checkpoint and run it on the arm",
            "Run a series of trials and record outcomes",
            "Categorize failure cases and identify root causes",
          ],
          deliverable: "An evaluation report with success rate and a failure-case breakdown.",
        },
      },
      "developing-1": {
        title: "Designing an industrial robotics project",
        desc: "Choosing a real task from local industry needs.",
        detail: {
          objectives: [
            "Identify a real industrial task suitable as a Developing project",
            "Scope the project and draft an initial execution plan",
          ],
          tools: ["Field interviews/visits", "A project design document"],
          steps: [
            "Identify a local industrial need suited to automation",
            "Define the task's scope and expected outputs",
            "Write and review an initial design document with a mentor",
          ],
          deliverable: "A mentor-approved project design document.",
        },
      },
      "developing-2": {
        title: "Performance tuning & failure-case handling",
        desc: "Raising policy reliability under real-world conditions.",
        detail: {
          objectives: [
            "Improve policy reliability under varying operating conditions",
            "Build a strategy for handling recurring failure cases",
          ],
          tools: ["LeRobot", "Diagnostic logs", "Targeted additional data"],
          steps: [
            "Analyze failure patterns from the Qualifying stage",
            "Collect additional data targeting weak points",
            "Retrain and measure the improvement",
          ],
          deliverable: "An improved policy version with a before/after performance comparison.",
        },
      },
      "developing-3": {
        title: "Mentorship & building training materials",
        desc: "Passing knowledge on to the next cohort of trainees.",
        detail: {
          objectives: [
            "Document one's own learning journey in a reusable way",
            "Mentor a next-cohort trainee through at least one module",
          ],
          tools: ["Platform documentation", "Live mentoring sessions"],
          steps: [
            "Summarize the key lessons from one's own track",
            "Prepare notes or support material for a specific module",
            "Mentor a new trainee hands-on through that module",
          ],
          deliverable: "Written mentoring material and at least one documented mentoring session.",
        },
      },
    },
  },
};

export function getModuleTrack(moduleId: string): TrackKey {
  for (const track of TRACK_ORDER) {
    if (MODULE_IDS[track].includes(moduleId)) return track;
  }
  throw new Error(`Unknown module id: ${moduleId}`);
}

export function getModuleIndexInTrack(moduleId: string): number {
  const track = getModuleTrack(moduleId);
  return MODULE_IDS[track].indexOf(moduleId);
}

export type ModuleStatus = "locked" | "available" | "completed";

export function getModuleStatus(moduleId: string, completed: Set<string>): ModuleStatus {
  if (completed.has(moduleId)) return "completed";
  const track = getModuleTrack(moduleId);
  const ids = MODULE_IDS[track];
  const idx = ids.indexOf(moduleId);
  if (idx === 0) return "available";
  return completed.has(ids[idx - 1]) ? "available" : "locked";
}
