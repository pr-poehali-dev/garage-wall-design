import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/da9bb278-86f7-4895-86cc-0bee9705839b/files/d8ceb697-ed92-4350-a40c-1088ce48a62f.jpg";
const FLOOR_IMG = "https://cdn.poehali.dev/projects/da9bb278-86f7-4895-86cc-0bee9705839b/files/109245b0-459b-417a-9dd2-608ce1119784.jpg";
const LIGHT_IMG = "https://cdn.poehali.dev/projects/da9bb278-86f7-4895-86cc-0bee9705839b/files/e963de4e-34e2-4005-b211-dad3ef8229af.jpg";

const features = [
  {
    icon: "Lightbulb",
    title: "Система освещения",
    description: "Периметральные LED-ленты + встраиваемые споты. Равномерный свет без теней для безопасного манёвра.",
    detail: "4000K нейтральный белый · 500 лк рабочая плоскость",
  },
  {
    icon: "Car",
    title: "Зона парковки",
    description: "Просчитанные направляющие разметки и зоны безопасного открытия дверей с учётом габаритов автомобиля.",
    detail: "Разметка напольная · Датчики приближения",
  },
  {
    icon: "Layers",
    title: "Напольное покрытие",
    description: "Эпоксидная наливная система в два слоя: грунт + финишный матовый состав. Стойкость к маслу и механике.",
    detail: "Мозаичный кварц · Толщина 3–4 мм · RAL по выбору",
  },
  {
    icon: "Paintbrush",
    title: "Отделка стен",
    description: "Качественная покраска в нейтральных тонах — моющиеся составы, устойчивые к влаге и перепадам температур.",
    detail: "Акриловая дисперсия · Класс влагостойкости A",
  },
];

const stages = [
  { num: "01", label: "Замер и проект", desc: "Выезд специалиста, 3D-план" },
  { num: "02", label: "Подготовка", desc: "Стяжка, разводка кабелей" },
  { num: "03", label: "Покрытие", desc: "Эпоксидный наполнитель" },
  { num: "04", label: "Освещение", desc: "Монтаж и настройка" },
  { num: "05", label: "Финиш", desc: "Покраска, разметка, сдача" },
];

export default function Index() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen bg-background font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-foreground flex items-center justify-center">
            <Icon name="Home" size={14} className="text-background" />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide">ГАРАЖ</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-light text-muted-foreground">
          <a href="#project" className="hover:text-foreground transition-colors">Проект</a>
          <a href="#features" className="hover:text-foreground transition-colors">Решения</a>
          <a href="#stages" className="hover:text-foreground transition-colors">Этапы</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Связаться</a>
        </div>
        <button className="hidden md:block text-xs font-medium tracking-widest uppercase px-5 py-2.5 bg-foreground text-background hover:bg-foreground/85 transition-colors">
          Получить смету
        </button>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Гараж интерьер"
            className="w-full h-full object-cover animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-32">
          <p className="opacity-0-init animate-fade-up delay-100 text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
            Дизайн и отделка гаража
          </p>
          <h1 className="opacity-0-init animate-fade-up delay-200 font-display text-5xl md:text-7xl font-light text-white leading-[1.05] mb-6 max-w-3xl">
            Классический нейтральный<br />
            <em className="italic font-light">интерьер</em>
          </h1>
          <div className="opacity-0-init animate-fade-up delay-300 flex items-center gap-6 mb-10">
            <div className="h-px w-12 bg-white/40" />
            <p className="text-white/70 text-sm font-light max-w-md">
              Продуманная система освещения, качественное напольное покрытие и удобная зона парковки
            </p>
          </div>
          <div className="opacity-0-init animate-fade-up delay-500 flex items-center gap-4">
            <button className="px-8 py-3.5 bg-white text-foreground text-sm font-medium tracking-wide hover:bg-white/90 transition-colors">
              Смотреть проект
            </button>
            <button className="px-8 py-3.5 border border-white/40 text-white text-sm font-light tracking-wide hover:border-white/70 transition-colors">
              Рассчитать стоимость
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-3 divide-x divide-white/10 bg-foreground/60 backdrop-blur-sm">
          {[
            { val: "7 лет", label: "Опыт в отделке" },
            { val: "200+", label: "Сданных объектов" },
            { val: "3 года", label: "Гарантия на работы" },
          ].map((s) => (
            <div key={s.val} className="px-8 py-4 text-center">
              <div className="font-display text-2xl font-semibold text-white">{s.val}</div>
              <div className="text-white/50 text-xs mt-0.5 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section id="project" className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">О проекте</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-6">
              Пространство,<br />продуманное<br /><em className="italic">до детали</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <p className="text-muted-foreground font-light leading-relaxed mb-5">
              Гараж — это не просто место хранения автомобиля. Правильно спроектированное пространство делает каждый заезд комфортным, а уход за машиной — удовольствием.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed">
              Мы разработали концепцию на основе трёх принципов: нейтральная цветовая палитра, функциональный свет и долговечное покрытие.
            </p>
          </div>
          <div className="relative">
            <img
              src={LIGHT_IMG}
              alt="Освещение гаража"
              className="w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-5 border border-border shadow-sm">
              <div className="font-display text-3xl font-semibold text-gold">4000K</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide">Нейтральный белый свет</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="py-16 px-8 md:px-16 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {/* Размеры */}
            <div className="bg-foreground p-10">
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-5">Размеры гаража</p>
              <div className="flex items-end gap-3 mb-6">
                <span className="font-display text-5xl font-light text-white">12,5</span>
                <span className="font-display text-3xl font-light text-white/40 mb-1">×</span>
                <span className="font-display text-5xl font-light text-white">3,5</span>
                <span className="text-white/40 text-sm font-light mb-2">м</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 font-light">Длина</span>
                  <span className="text-white font-medium">12,5 м</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40 font-light">Ширина</span>
                  <span className="text-white font-medium">3,5 м</span>
                </div>
              </div>
            </div>

            {/* Площадь и периметр */}
            <div className="bg-foreground p-10 border-l border-white/10">
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-5">Площади</p>
              <div className="space-y-5">
                <div>
                  <div className="font-display text-4xl font-light text-gold">43,75 м²</div>
                  <div className="text-white/40 text-xs mt-1 tracking-wide">Площадь пола</div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <div className="font-display text-3xl font-light text-white">32 м</div>
                  <div className="text-white/40 text-xs mt-1 tracking-wide">Периметр (для LED-ленты)</div>
                </div>
              </div>
            </div>

            {/* Расчёт материалов */}
            <div className="bg-foreground p-10 border-l border-white/10">
              <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-5">Расчёт материалов</p>
              <div className="space-y-3">
                {[
                  { label: "Эпоксидный праймер", val: "~53 кг", note: "грунт 1,2 кг/м²" },
                  { label: "Финишный состав", val: "~88 кг", note: "2 кг/м²" },
                  { label: "LED-лента периметр", val: "~35 м", note: "+ запас 10%" },
                  { label: "Споты накладные", val: "6–8 шт", note: "500 лк / 5–6 м²" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-white text-xs font-medium">{r.label}</div>
                      <div className="text-white/30 text-xs">{r.note}</div>
                    </div>
                    <div className="text-white font-display text-lg font-light ml-4 flex-shrink-0">{r.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Ключевые решения</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">Что входит<br />в <em className="italic">проект</em></h2>
            </div>
            <div className="hidden md:block text-muted-foreground text-sm font-light">
              {activeFeature + 1} / {features.length}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border">
            {features.map((f, i) => (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`p-8 text-left transition-all duration-300 ${
                  activeFeature === i
                    ? "bg-foreground text-background"
                    : "bg-background hover:bg-accent/60"
                }`}
              >
                <div className={`mb-5 ${activeFeature === i ? "text-white/70" : "text-gold"}`}>
                  <Icon name={f.icon} size={22} />
                </div>
                <h3 className={`font-display text-xl font-semibold mb-3 ${activeFeature === i ? "text-white" : ""}`}>
                  {f.title}
                </h3>
                <p className={`text-sm font-light leading-relaxed mb-4 ${activeFeature === i ? "text-white/70" : "text-muted-foreground"}`}>
                  {f.description}
                </p>
                <div className={`text-xs tracking-wide pt-4 border-t ${
                  activeFeature === i ? "border-white/20 text-white/50" : "border-border text-muted-foreground"
                }`}>
                  {f.detail}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FLOOR SECTION */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Напольное покрытие</p>
            <h2 className="font-display text-4xl font-light leading-[1.1] mb-6">
              Эпоксидная<br /><em className="italic">система</em>
            </h2>
            <div className="w-12 h-px bg-gold mb-8" />
            <div className="space-y-5">
              {[
                { icon: "Shield", label: "Стойкость к маслу и химии" },
                { icon: "Zap", label: "Противоскользящая поверхность" },
                { icon: "Thermometer", label: "Диапазон −40°C / +80°C" },
                { icon: "Clock", label: "Срок службы от 15 лет" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-border flex items-center justify-center text-gold flex-shrink-0">
                    <Icon name={item.icon} size={16} />
                  </div>
                  <span className="text-sm text-muted-foreground font-light">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-3">
            <img
              src={FLOOR_IMG}
              alt="Напольное покрытие"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section id="stages" className="py-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">Как мы работаем</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              Этапы <em className="italic">работ</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-px bg-white/10">
            {stages.map((s) => (
              <div key={s.num} className="bg-foreground p-8 group hover:bg-white/5 transition-colors cursor-default">
                <div className="font-display text-4xl font-light text-white/20 mb-6 group-hover:text-gold transition-colors">
                  {s.num}
                </div>
                <h3 className="text-white font-medium text-sm mb-2">{s.label}</h3>
                <p className="text-white/40 text-xs font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="font-display text-3xl font-light text-white">14–21 день</div>
              <div className="text-white/40 text-xs mt-1 tracking-wide">Среднее время реализации</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <div className="font-display text-3xl font-light text-white">под ключ</div>
              <div className="text-white/40 text-xs mt-1 tracking-wide">Формат сдачи</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="border border-border p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-100/20 blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Получить расчёт</p>
                <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.1] mb-5">
                  Готовы начать<br /><em className="italic">ваш проект?</em>
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Оставьте заявку — приедем на замер, составим смету и расскажем о материалах. Бесплатно, без обязательств.
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-5 py-3.5 border border-border bg-background text-sm font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-5 py-3.5 border border-border bg-background text-sm font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
                />
                <textarea
                  placeholder="Площадь гаража и пожелания"
                  rows={3}
                  className="w-full px-5 py-3.5 border border-border bg-background text-sm font-light placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors resize-none"
                />
                <button className="w-full py-4 bg-foreground text-background text-sm font-medium tracking-widest uppercase hover:bg-foreground/85 transition-colors">
                  Отправить заявку
                </button>
                <p className="text-center text-xs text-muted-foreground font-light">
                  Перезвоним в течение часа
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8 md:px-16 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-foreground flex items-center justify-center">
              <Icon name="Home" size={11} className="text-background" />
            </div>
            <span className="font-display text-base font-semibold tracking-wide">ГАРАЖ</span>
          </div>
          <p className="text-xs text-muted-foreground font-light">
            Дизайн и отделка гаражных пространств
          </p>
        </div>
      </footer>
    </div>
  );
}