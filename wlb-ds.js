/* @ds-bundle: {"format":4,"namespace":"WLBForumDesignSystem_a27a89","components":[{"name":"Countdown","sourcePath":"components/brand/Countdown.jsx"},{"name":"DetailRow","sourcePath":"components/brand/DetailRow.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Marquee","sourcePath":"components/brand/Marquee.jsx"},{"name":"PillarStat","sourcePath":"components/brand/PillarStat.jsx"},{"name":"Reveal","sourcePath":"components/brand/Reveal.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"SpeakerCard","sourcePath":"components/brand/SpeakerCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"EmailBanner","sourcePath":"ui_kits/collateral/EmailBanner.jsx"},{"name":"Poster","sourcePath":"ui_kits/collateral/Poster.jsx"},{"name":"StoryCard","sourcePath":"ui_kits/collateral/StoryCard.jsx"},{"name":"CultureStatement","sourcePath":"ui_kits/forum-site/CultureStatement.jsx"},{"name":"DiezAnos","sourcePath":"ui_kits/forum-site/DiezAnos.jsx"},{"name":"Ejes","sourcePath":"ui_kits/forum-site/Ejes.jsx"},{"name":"Expectations","sourcePath":"ui_kits/forum-site/Expectations.jsx"},{"name":"Gallery","sourcePath":"ui_kits/forum-site/Gallery.jsx"},{"name":"Hero","sourcePath":"ui_kits/forum-site/Hero.jsx"},{"name":"PHOTOS","sourcePath":"ui_kits/forum-site/Photos.jsx"},{"name":"EDITIONS","sourcePath":"ui_kits/forum-site/Photos.jsx"},{"name":"ARCHIVE","sourcePath":"ui_kits/forum-site/Photos.jsx"},{"name":"Program","sourcePath":"ui_kits/forum-site/Program.jsx"},{"name":"Register","sourcePath":"ui_kits/forum-site/Register.jsx"},{"name":"SiteFooter","sourcePath":"ui_kits/forum-site/SiteFooter.jsx"},{"name":"SponsorCta","sourcePath":"ui_kits/forum-site/SponsorCta.jsx"},{"name":"Sponsors","sourcePath":"ui_kits/forum-site/Sponsors.jsx"},{"name":"VenueAccess","sourcePath":"ui_kits/forum-site/VenueAccess.jsx"},{"name":"TEASER","sourcePath":"ui_kits/forum-site/VideoBlock.jsx"},{"name":"VideoBlock","sourcePath":"ui_kits/forum-site/VideoBlock.jsx"}],"sourceHashes":{"components/brand/Countdown.jsx":"a9bb4469d40a","components/brand/DetailRow.jsx":"d293fba3c953","components/brand/Eyebrow.jsx":"4d1ea51b1ee3","components/brand/Icon.jsx":"1e397eefd297","components/brand/Logo.jsx":"f4baf1e8f2ad","components/brand/Marquee.jsx":"b6876eeb2cd6","components/brand/PillarStat.jsx":"8de76cbf0521","components/brand/Reveal.jsx":"11aac001371f","components/brand/SectionHeading.jsx":"c8d0d381f1f0","components/brand/SpeakerCard.jsx":"737e95c126f5","components/core/Badge.jsx":"e6fccdbc649b","components/core/Button.jsx":"67b466f96cbd","components/core/Card.jsx":"df8201b7bd31","components/core/IconButton.jsx":"4c7a34e9b362","components/core/Tag.jsx":"ec5f03157719","components/feedback/Dialog.jsx":"1723897159a9","components/feedback/Toast.jsx":"ee0da62d90b6","components/feedback/Tooltip.jsx":"01f882cbcc26","components/forms/Checkbox.jsx":"ce791d31de0c","components/forms/Field.jsx":"a57bc235c049","components/forms/Input.jsx":"43481104b774","components/forms/Radio.jsx":"0542d9db3335","components/forms/Select.jsx":"d4300196877e","components/forms/Switch.jsx":"6c3adf6690f8","components/navigation/Navbar.jsx":"689fac5ce96d","components/navigation/Tabs.jsx":"61215a17dc13","ui_kits/collateral/EmailBanner.jsx":"8c454c435ae3","ui_kits/collateral/Poster.jsx":"bb8359a2c734","ui_kits/collateral/StoryCard.jsx":"081f894bdf57","ui_kits/forum-site/CultureStatement.jsx":"35e9bad2920f","ui_kits/forum-site/DiezAnos.jsx":"2bc9d569e73c","ui_kits/forum-site/Ejes.jsx":"f10e245c176a","ui_kits/forum-site/Expectations.jsx":"9f5b46693cea","ui_kits/forum-site/Gallery.jsx":"0d691bf54323","ui_kits/forum-site/Hero.jsx":"fae5b2bc6ee0","ui_kits/forum-site/Photos.jsx":"c937f2bf2f5b","ui_kits/forum-site/Program.jsx":"17ef4b9fe696","ui_kits/forum-site/Register.jsx":"a53513d0835c","ui_kits/forum-site/SiteFooter.jsx":"59f4a8424f57","ui_kits/forum-site/SponsorCta.jsx":"c9601f94cc16","ui_kits/forum-site/Sponsors.jsx":"690f9f64ec82","ui_kits/forum-site/VenueAccess.jsx":"65d806c1e7a8","ui_kits/forum-site/VideoBlock.jsx":"a5043fb09cdf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WLBForumDesignSystem_a27a89 = window.WLBForumDesignSystem_a27a89 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Countdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const UNITS = [{
  key: 'dias',
  label: 'Días'
}, {
  key: 'horas',
  label: 'Horas'
}, {
  key: 'minutos',
  label: 'Minutos'
}, {
  key: 'segundos',
  label: 'Segundos'
}];
function split(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    dias: Math.floor(s / 86400),
    horas: Math.floor(s % 86400 / 3600),
    minutos: Math.floor(s % 3600 / 60),
    segundos: s % 60
  };
}
function Countdown({
  target,
  heading = 'El evento iniciará en:',
  style,
  ...rest
}) {
  const end = React.useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const v = split(end - now);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--white)',
      textAlign: 'center'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--space-5)'
    }
  }, UNITS.map((u, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: u.key
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      background: 'var(--line-hairline)',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 104,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(40px,5vw,64px)',
      lineHeight: 1,
      letterSpacing: '-.01em',
      color: 'var(--orange-500)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(v[u.key]).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, u.label))))));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  rule = true,
  tone = 'light',
  ruleLength,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: tone === 'light' ? 'var(--white)' : 'var(--text-on-light)'
    }
  }, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      height: 'var(--rule-weight)',
      width: ruleLength || 'var(--rule-length)',
      background: 'var(--line-rule)',
      flex: '0 0 auto'
    }
  }));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (ISC) is loaded from CDN once and its icon registry is read directly,
   so every glyph in this system is the real Lucide outline drawing — nothing
   here is hand-drawn. Stroke width 2, round caps: the same construction as the
   orange pillar glyphs on the source poster. */
const SRC = 'https://unpkg.com/lucide@0.469.0/dist/umd/lucide.js';
let loading = null;
function loadLucide() {
  if (typeof window === 'undefined') return Promise.resolve(null);
  if (window.lucide && window.lucide.icons) return Promise.resolve(window.lucide);
  if (!loading) {
    loading = new Promise(resolve => {
      const s = document.createElement('script');
      s.src = SRC;
      s.onload = () => resolve(window.lucide || null);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    });
  }
  return loading;
}
const pascal = n => String(n).replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());
function serialize(children) {
  if (!Array.isArray(children)) return '';
  return children.map(([tag, attrs]) => {
    const a = Object.entries(attrs || {}).map(([k, v]) => k + '="' + String(v).replace(/"/g, '&quot;') + '"').join(' ');
    return '<' + tag + (a ? ' ' + a : '') + ' />';
  }).join('');
}
function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const [markup, setMarkup] = React.useState('');
  React.useEffect(() => {
    let live = true;
    loadLucide().then(l => {
      if (!live || !l) return;
      const def = l.icons[pascal(name)];
      setMarkup(def ? serialize(def[2]) : '');
    });
    return () => {
      live = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/DetailRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DetailRow({
  icon,
  primary,
  secondary,
  iconSize = 34,
  rule = true,
  compact = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize,
    color: "var(--orange-500)"
  }), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--hairline)',
      alignSelf: 'stretch',
      background: 'var(--line-rule)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: compact ? 'var(--size-body)' : 'var(--size-subheading)',
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: 'var(--white)',
      lineHeight: 1.2
    }
  }, primary), secondary && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: compact ? 'var(--size-small)' : 'var(--size-body)',
      color: 'var(--text-body)'
    }
  }, secondary)));
}
Object.assign(__ds_scope, { DetailRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DetailRow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  variant = 'wlb',
  height = 64,
  assetBase = '../../assets',
  withDivider = true,
  style,
  ...rest
}) {
  const wlb = /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo-wlb-forum-white.png',
    alt: "X WLB Forum \u2014 Work Life Balance",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
  const wlbImef = /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo-wlb-imef-ejecutivo-white.png',
    alt: "WLB Forum \u2014 IMEF Ejecutivo",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
  const imef = /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/logo-imef-monterrey-white.png',
    alt: "IMEF Ejecutivos de Finanzas \u2014 Grupo Monterrey",
    style: {
      height: height * 0.86,
      width: 'auto',
      display: 'block'
    }
  });
  if (variant === 'wlb') return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), wlb);
  if (variant === 'imef') return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), imef);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), wlbImef, withDivider && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--hairline)',
      height: height * 0.45,
      background: 'var(--line-hairline)'
    }
  }), imef);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Continuous ticker band: uppercase tracked items separated by orange dots,
   scrolling left at a constant speed. Duplicates its items once so the loop
   is seamless. Pauses on hover. */
function Marquee({
  items = [],
  speed = 36,
  tone = 'navy',
  style,
  ...rest
}) {
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    if (document.getElementById('wlb-marquee-kf')) return;
    const s = document.createElement('style');
    s.id = 'wlb-marquee-kf';
    s.textContent = '@keyframes wlb-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}';
    document.head.appendChild(s);
  }, []);
  const list = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    style: {
      overflow: 'hidden',
      background: tone === 'orange' ? 'var(--orange-500)' : 'var(--navy-900)',
      borderTop: 'var(--border-hairline)',
      borderBottom: 'var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      animation: 'wlb-marquee ' + speed + 's linear infinite',
      animationPlayState: paused ? 'paused' : 'running'
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: '18px var(--space-6) 18px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-small)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      color: 'var(--white)'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: tone === 'orange' ? 'var(--white)' : 'var(--orange-500)'
    }
  })))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/brand/PillarStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PillarStat({
  icon,
  label,
  caption,
  size = 44,
  divider = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'stretch',
      ...style
    }
  }, rest), divider && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'var(--hairline)',
      background: 'var(--line-hairline)',
      marginRight: 'var(--space-6)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      minWidth: '96px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--white)',
      textAlign: 'center'
    }
  }, label), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, caption)));
}
Object.assign(__ds_scope, { PillarStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PillarStat.jsx", error: String((e && e.message) || e) }); }

// components/brand/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Scroll reveal: fades and lifts its children 24px once they enter the
   viewport. Brand motion rules: 360ms, ease-out, no bounce. Set
   document.documentElement.dataset.noReveal = '1' (print copies) to render
   everything visible immediately. */
function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (document.documentElement.dataset.noReveal || !('IntersectionObserver' in window) || window.matchMedia('print').matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setOn(true);
          if (once) io.disconnect();
        } else if (!once) setOn(false);
      });
    }, {
      threshold: .12,
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: on ? 1 : 0,
      transform: on ? 'none' : 'translateY(' + y + 'px)',
      transition: 'opacity var(--dur-slow) var(--ease-out) ' + delay + 'ms, transform var(--dur-slow) var(--ease-out) ' + delay + 'ms',
      willChange: 'opacity, transform',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  accent,
  lead,
  tone = 'light',
  align = 'left',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: '760px',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-display-m)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--track-display)',
      textTransform: 'uppercase',
      color: light ? 'var(--text-display)' : 'var(--text-on-light)'
    }
  }, title, ' ', accent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, accent)), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--leading-body)',
      color: light ? 'var(--text-body)' : 'var(--text-body-on-light)',
      textWrap: 'pretty'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpeakerCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SpeakerCard({
  name,
  role,
  org,
  photo,
  topic,
  tone = 'glass',
  style,
  ...rest
}) {
  const light = tone !== 'solid';
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      borderRadius: 'var(--radius-panel)',
      overflow: 'hidden',
      background: light ? 'var(--surface-card)' : 'var(--surface-card-solid)',
      boxShadow: light ? 'var(--inset-hairline)' : 'var(--shadow-raised)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      background: 'var(--navy-800)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.85) contrast(1.05)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-display-m)',
      color: 'var(--navy-400)'
    }
  }, String(name || '').slice(0, 1)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect-bottom)',
      opacity: .55
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--pad-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-subheading)',
      lineHeight: 'var(--leading-heading)',
      color: light ? 'var(--white)' : 'var(--text-on-light)'
    }
  }, name), (role || org) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: light ? 'var(--text-muted)' : 'var(--text-body-on-light)'
    }
  }, [role, org].filter(Boolean).join(' · ')), topic && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, topic)));
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: {
    background: 'var(--orange-500)',
    color: 'var(--white)'
  },
  accentSoft: {
    background: 'var(--orange-050)',
    color: 'var(--orange-600)'
  },
  navy: {
    background: 'var(--navy-800)',
    color: 'var(--white)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--white)',
    boxShadow: 'inset 0 0 0 1px var(--line-hairline)'
  },
  success: {
    background: 'var(--status-success)',
    color: 'var(--white)'
  },
  danger: {
    background: 'var(--status-danger)',
    color: 'var(--white)'
  }
};
function Badge({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-style-label)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--gap-inline)',
  fontFamily: 'var(--font-display)',
  fontWeight: 'var(--weight-bold)',
  letterSpacing: 'var(--track-label)',
  textTransform: 'uppercase',
  border: 'none',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'var(--transition-base)'
};
const sizes = {
  sm: {
    padding: '9px 20px',
    fontSize: 'var(--size-micro)'
  },
  md: {
    padding: 'var(--pad-button-y) var(--pad-button-x)',
    fontSize: 'var(--size-small)'
  },
  lg: {
    padding: '18px 48px',
    fontSize: 'var(--size-subheading)',
    letterSpacing: '.06em'
  }
};
const variants = {
  primary: {
    background: 'var(--orange-500)',
    color: 'var(--text-on-accent)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--white)',
    boxShadow: 'inset 0 0 0 2px var(--white)'
  },
  outlineAccent: {
    background: 'transparent',
    color: 'var(--orange-500)',
    boxShadow: 'inset 0 0 0 2px var(--orange-500)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--white)'
  },
  onLight: {
    background: 'var(--navy-700)',
    color: 'var(--white)'
  }
};
const hovers = {
  primary: {
    background: 'var(--state-hover-accent)'
  },
  secondary: {
    background: 'var(--state-hover-veil)'
  },
  outlineAccent: {
    background: 'var(--orange-050)'
  },
  ghost: {
    background: 'var(--state-hover-veil)'
  },
  onLight: {
    background: 'var(--navy-600)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      width: fullWidth ? '100%' : undefined,
      transform: press && !disabled ? 'scale(var(--state-press-scale))' : 'none',
      opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
      pointerEvents: disabled ? 'none' : undefined,
      ...style
    }
  }, rest), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  glass: {
    background: 'var(--surface-card)',
    boxShadow: 'var(--inset-hairline)',
    color: 'var(--text-body)'
  },
  navy: {
    background: 'var(--surface-card-navy)',
    color: 'var(--text-body)'
  },
  solid: {
    background: 'var(--surface-card-solid)',
    color: 'var(--text-on-light)',
    boxShadow: 'var(--shadow-raised)'
  },
  outline: {
    background: 'transparent',
    boxShadow: 'inset 0 0 0 1px var(--line-hairline)',
    color: 'var(--text-body)'
  }
};
function Card({
  children,
  surface = 'glass',
  accentTop = false,
  padding,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-panel)',
      padding: padding || 'var(--pad-card-lg)',
      borderTop: accentTop ? 'var(--border-rule)' : undefined,
      fontFamily: 'var(--font-body)',
      ...surfaces[surface],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = {
    ghost: 'transparent',
    solid: 'var(--orange-500)',
    outline: 'transparent'
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: sizes[size],
      height: sizes[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      color: variant === 'solid' ? 'var(--white)' : 'var(--orange-500)',
      background: hover && !disabled ? variant === 'solid' ? 'var(--state-hover-accent)' : 'var(--state-hover-veil)' : bg,
      boxShadow: variant === 'outline' ? 'inset 0 0 0 1px var(--line-hairline)' : 'none',
      opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const interactive = typeof onClick === 'function';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--size-small)',
      letterSpacing: '.02em',
      cursor: interactive ? 'pointer' : 'default',
      background: selected ? 'var(--orange-500)' : hover && interactive ? 'var(--state-hover-veil)' : 'transparent',
      color: selected ? 'var(--white)' : 'var(--text-body)',
      boxShadow: selected ? 'none' : 'inset 0 0 0 1px var(--line-hairline)',
      transition: 'var(--transition-base)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = false,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(15,22,56,.72)',
      backdropFilter: 'var(--blur-panel)',
      padding: 'var(--space-6)',
      animation: 'none'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--navy-800)',
      borderRadius: 'var(--radius-panel)',
      borderTop: 'var(--border-rule)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--pad-card-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      flex: 1,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      lineHeight: 'var(--leading-heading)',
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      color: 'var(--white)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-style-body)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'flex-end',
      marginTop: 'var(--space-2)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  accent: 'var(--orange-500)',
  success: 'var(--status-success)',
  danger: 'var(--status-danger)',
  info: 'var(--navy-300)'
};
function Toast({
  children,
  tone = 'accent',
  onDismiss,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: 'var(--navy-900)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-panel)',
      borderLeft: '4px solid ' + tones[tone],
      boxShadow: 'var(--shadow-overlay)',
      padding: 'var(--space-4) var(--space-5)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      maxWidth: '420px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, children), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Cerrar",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: '16px',
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  children,
  placement = 'top',
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-out)',
      background: 'var(--navy-900)',
      color: 'var(--white)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-field)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-micro)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-raised)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  tone = 'light',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 auto',
      marginTop: '1px',
      borderRadius: '4px',
      display: 'grid',
      placeItems: 'center',
      background: checked ? 'var(--orange-500)' : light ? 'rgba(255,255,255,.08)' : 'var(--white)',
      boxShadow: checked ? 'none' : 'inset 0 0 0 1px ' + (light ? 'rgba(255,255,255,.35)' : 'var(--grey-400)'),
      transition: 'var(--transition-base)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--white)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      lineHeight: 'var(--leading-body)',
      color: light ? 'var(--text-body)' : 'var(--text-body-on-light)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared label + hint + error frame for every form control. */
function Field({
  label,
  hint,
  error,
  required = false,
  tone = 'light',
  htmlFor,
  children,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--white)' : 'var(--text-on-light)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, " *")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: error ? 'var(--status-danger)' : light ? 'var(--text-muted)' : 'var(--text-body-on-light)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  tone = 'light',
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        boxSizing: 'border-box',
        padding: 'var(--pad-field-y) var(--pad-field-x)',
        borderRadius: 'var(--radius-field)',
        border: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body)',
        background: light ? 'rgba(255,255,255,.08)' : 'var(--white)',
        color: light ? 'var(--white)' : 'var(--text-on-light)',
        boxShadow: focus ? 'inset 0 0 0 1px var(--orange-500), var(--focus-ring)' : 'inset 0 0 0 1px ' + (light ? 'rgba(255,255,255,.28)' : 'var(--grey-200)'),
        outline: 'none',
        transition: 'var(--transition-base)'
      },
      boxShadow: invalid ? 'inset 0 0 0 1px var(--status-danger)' : focus ? 'inset 0 0 0 1px var(--orange-500), var(--focus-ring)' : 'inset 0 0 0 1px ' + (light ? 'rgba(255,255,255,.28)' : 'var(--grey-200)'),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  tone = 'light',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '20px',
      height: '20px',
      flex: '0 0 auto',
      marginTop: '1px',
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: light ? 'rgba(255,255,255,.08)' : 'var(--white)',
      boxShadow: 'inset 0 0 0 ' + (checked ? '2px var(--orange-500)' : '1px ' + (light ? 'rgba(255,255,255,.35)' : 'var(--grey-400)')),
      transition: 'var(--transition-base)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--orange-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--size-small)',
      color: light ? 'var(--white)' : 'var(--text-on-light)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: light ? 'var(--text-muted)' : 'var(--text-body-on-light)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  tone = 'light',
  options = [],
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...{
        width: '100%',
        boxSizing: 'border-box',
        padding: 'var(--pad-field-y) var(--pad-field-x)',
        borderRadius: 'var(--radius-field)',
        border: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body)',
        background: light ? 'rgba(255,255,255,.08)' : 'var(--white)',
        color: light ? 'var(--white)' : 'var(--text-on-light)',
        boxShadow: focus ? 'inset 0 0 0 1px var(--orange-500), var(--focus-ring)' : 'inset 0 0 0 1px ' + (light ? 'rgba(255,255,255,.28)' : 'var(--grey-200)'),
        outline: 'none',
        transition: 'var(--transition-base)'
      },
      appearance: 'none',
      paddingRight: '40px',
      cursor: 'pointer',
      ...style
    }
  }, rest), children || options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--orange-500)',
      fontSize: '11px'
    }
  }, "\u25BC"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  tone = 'light',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--state-disabled-opacity)' : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '24px',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--orange-500)' : light ? 'rgba(255,255,255,.18)' : 'var(--grey-200)',
      position: 'relative',
      flex: '0 0 auto',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: checked ? '23px' : '3px',
      width: '18px',
      height: '18px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: light ? 'var(--text-body)' : 'var(--text-body-on-light)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Navbar({
  items = [],
  active,
  onNavigate,
  cta,
  assetBase = '../../assets',
  sticky = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: sticky ? 'sticky' : 'static',
      top: 0,
      zIndex: 20,
      background: 'rgba(31,44,99,.82)',
      backdropFilter: 'var(--blur-panel)',
      borderBottom: 'var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-4) var(--page-gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wlb",
    height: 54,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto'
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it.id);
        }
      },
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--size-eyebrow)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: on ? 'var(--orange-500)' : 'var(--text-body)',
        paddingBottom: '4px',
        borderBottom: on ? '2px solid var(--orange-500)' : '2px solid transparent',
        transition: 'var(--transition-base)'
      }
    }, it.label);
  })), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: cta.onClick
  }, cta.label)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid ' + (light ? 'var(--line-hairline)' : 'var(--line-hairline-light)'),
      ...style
    }
  }, rest), items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        marginBottom: '-1px',
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-bold)',
        fontSize: 'var(--size-small)',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        color: on ? 'var(--orange-500)' : light ? 'var(--text-muted)' : 'var(--text-body-on-light)',
        borderBottom: '3px solid ' + (on ? 'var(--orange-500)' : 'transparent'),
        transition: 'var(--transition-base)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/EmailBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 1200 x 420 header banner for the save-the-date mailout. */

function EmailBanner({
  assetBase = '../../assets',
  scale = 1,
  style,
  ...rest
}) {
  const W = 1200,
    H = 420;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: W * scale,
      height: H * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-700)',
      fontFamily: 'var(--font-display)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/imagery-venue-navy.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy-flat)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      padding: '36px 56px',
      display: 'flex',
      alignItems: 'center',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "10ma edici\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 80,
      height: 4,
      background: 'var(--orange-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 76,
      fontWeight: 800,
      lineHeight: .9,
      letterSpacing: '-.01em',
      textTransform: 'uppercase'
    }
  }, "WLB Forum"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, "Work Life Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 28,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase'
    }
  }, "Jueves 5 de noviembre \xB7 Club Industrial"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "wlb",
    height: 110,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      padding: '14px 36px',
      background: 'var(--orange-500)',
      color: 'var(--white)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      fontSize: 16,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, "Save the date")))));
}
Object.assign(__ds_scope, { EmailBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/EmailBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/Poster.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Faithful recreation of "WLB FORUM — 10ma edición" (1118 x 1450).
   Every coordinate below was measured off the supplied artwork; the groups are
   absolutely positioned so the recreation lands on the original grid. */

const W = 1118,
  H = 1450;
const GUTTER = 152;
const PILLARS = [{
  icon: 'user',
  label: 'Persona'
}, {
  icon: 'users',
  label: 'Liderazgo'
}, {
  icon: 'target',
  label: 'Impacto'
}, {
  icon: 'leaf',
  label: 'Futuro'
}];
function Poster({
  assetBase = '../../assets',
  scale = 1,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: W * scale,
      height: H * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-700)',
      fontFamily: 'var(--font-display)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/imagery-venue-navy.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 44,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 152,
    assetBase: assetBase,
    style: {
      gap: 56
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 284,
      left: GUTTER,
      display: 'flex',
      alignItems: 'center',
      gap: 39
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, "10ma edici\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 118,
      height: 5,
      background: 'var(--orange-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 331,
      left: GUTTER,
      fontSize: 148,
      fontWeight: 800,
      lineHeight: .94,
      letterSpacing: '-.01em',
      textTransform: 'uppercase'
    }
  }, "WLB", /*#__PURE__*/React.createElement("br", null), "Forum"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 637,
      left: GUTTER,
      fontSize: 41,
      fontWeight: 800,
      letterSpacing: '.155em',
      textTransform: 'uppercase',
      lineHeight: 1,
      color: 'var(--orange-500)'
    }
  }, "Work Life Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 702,
      left: GUTTER,
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      lineHeight: 1.33
    }
  }, "10 a\xF1os transformando la manera", /*#__PURE__*/React.createElement("br", null), "de vivir, trabajar y liderar"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 848,
      left: GUTTER - 4,
      display: 'flex',
      alignItems: 'stretch'
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p.icon
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      background: 'rgba(255,255,255,.45)',
      margin: '4px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      padding: '0 30px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: p.icon,
    size: 62,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: '.08em',
      textTransform: 'uppercase'
    }
  }, p.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 1025,
      left: 159
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      width: 79
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 58,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 58,
    color: "var(--orange-500)",
    style: {
      marginTop: 12
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      background: 'var(--orange-500)',
      margin: '0 28px 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 31,
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      lineHeight: 1.15
    }
  }, "Jueves 5 de noviembre"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 52,
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      lineHeight: 1.1
    }
  }, "Club Industrial"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 28,
      fontWeight: 400,
      lineHeight: 1.15
    }
  }, "Monterrey, Nuevo Le\xF3n")))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      position: 'absolute',
      top: 1211,
      left: 141,
      width: 447,
      height: 58,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--orange-500)',
      color: 'var(--white)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      fontSize: 33,
      fontWeight: 800,
      letterSpacing: '.035em',
      textTransform: 'uppercase'
    }
  }, "Save the date"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 1338,
      left: 143,
      fontSize: 30,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Informes: "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400
    }
  }, "pquiroga@imefmty.com"))));
}
Object.assign(__ds_scope, { Poster });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/Poster.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/StoryCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* 1080 x 1920 vertical social cut of the same announcement — same blocks,
   same gutter ratio, retimed for a 9:16 frame. */

function StoryCard({
  assetBase = '../../assets',
  scale = 1,
  style,
  ...rest
}) {
  const W = 1080,
    H = 1920;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: W * scale,
      height: H * scale,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: W,
      height: H,
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-700)',
      fontFamily: 'var(--font-display)',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      padding: '120px 96px 140px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/imagery-venue-navy.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 124,
    assetBase: assetBase,
    style: {
      gap: 44,
      justifyContent: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "10ma edici\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 100,
      height: 5,
      background: 'var(--orange-500)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 152,
      fontWeight: 800,
      lineHeight: .92,
      letterSpacing: '-.01em',
      textTransform: 'uppercase'
    }
  }, "WLB", /*#__PURE__*/React.createElement("br", null), "Forum"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: '.15em',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, "Work Life Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      lineHeight: 1.35
    }
  }, "10 a\xF1os transformando la manera", /*#__PURE__*/React.createElement("br", null), "de vivir, trabajar y liderar")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "calendar",
    size: 54,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      alignSelf: 'stretch',
      background: 'var(--orange-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: '.03em',
      textTransform: 'uppercase'
    }
  }, "Jueves 5 de noviembre")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 54,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      alignSelf: 'stretch',
      background: 'var(--orange-500)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, "Club Industrial"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 30
    }
  }, "Monterrey, Nuevo Le\xF3n"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginTop: 16,
      width: 520,
      height: 78,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--orange-500)',
      color: 'var(--white)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-pill)',
      fontSize: 36,
      fontWeight: 800,
      letterSpacing: '.035em',
      textTransform: 'uppercase'
    }
  }, "Save the date")))));
}
Object.assign(__ds_scope, { StoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/StoryCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Ejes.jsx
try { (() => {
/* The 2026 edition's four pillars, as printed on the poster. One line each,
   grounded in the forum's own positioning (conciliation, leadership, inclusion). */
const EJES = [{
  icon: 'user',
  title: 'Persona',
  body: 'Cómo compaginar la vida personal y la laboral sin renunciar a ninguna de las dos.'
}, {
  icon: 'users',
  title: 'Liderazgo',
  body: 'El liderazgo que reconoce las necesidades de los demás y actúa con congruencia.'
}, {
  icon: 'target',
  title: 'Impacto',
  body: 'Prácticas implementadas con éxito por organizaciones destacadas en liderazgo e inclusión.'
}, {
  icon: 'leaf',
  title: 'Futuro',
  body: 'Hacia dónde va la cultura en el trabajo, y qué le toca preparar a quien dirige hoy.'
}];
function Ejes({
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "ejes",
    style: {
      background: 'var(--navy-700)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Edici\xF3n 2026",
    title: "Cuatro ejes,",
    accent: "una conversaci\xF3n",
    lead: "La d\xE9cima edici\xF3n se organiza en cuatro ejes. Cada bloque del programa pertenece a uno de ellos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,190px),1fr))',
      rowGap: 'var(--space-8)'
    }
  }, EJES.map((e, i) => /*#__PURE__*/React.createElement("article", {
    key: e.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      padding: i === 0 ? '0 var(--space-6) 0 0' : '0 var(--space-6)',
      borderLeft: i === 0 ? 'none' : 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      color: 'var(--orange-500)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: e.icon,
    size: 56,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, e.body))))));
}
Object.assign(__ds_scope, { Ejes });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Ejes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Expectations.jsx
try { (() => {
/* Copy kept in the forum's own 2025 wording. */
const BLOCKS = [{
  title: 'Un espacio de reflexión',
  body: 'Descubre cómo las personas con reconocido liderazgo han logrado compaginar su vida personal y laboral.'
}, {
  title: 'Mejores prácticas',
  body: 'Implementadas con éxito por las empresas / organizaciones más destacadas en temas de liderazgo e inclusión.'
}, {
  title: 'Temática relevante',
  body: 'Vas a escuchar historias de éxito relatadas por destacados profesionistas con probada experiencia en el desarrollo organizacional y humano.'
}, {
  title: 'Un enfoque multidisciplinario',
  body: 'El Foro se ha posicionado como un espacio en el que interactúan diferentes industrias a nivel nacional.'
}];
function Expectations({
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "expectativas",
    style: {
      background: 'var(--navy-700)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Esta edici\xF3n",
    title: "\xBFQu\xE9 puedes esperar de esta edici\xF3n del",
    accent: "WLB Forum?",
    style: {
      maxWidth: 900
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
      borderTop: 'var(--border-hairline)',
      borderLeft: 'var(--border-hairline)'
    }
  }, BLOCKS.map((b, i) => /*#__PURE__*/React.createElement("article", {
    key: b.title,
    style: {
      display: 'grid',
      gridTemplateColumns: '72px 1fr',
      gap: 'var(--space-5)',
      padding: 'var(--space-7) var(--space-7) var(--space-7) 0',
      paddingLeft: 'var(--space-6)',
      borderRight: 'var(--border-hairline)',
      borderBottom: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-display-m)',
      lineHeight: 1,
      letterSpacing: '-.02em',
      color: 'var(--orange-500)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      lineHeight: 'var(--leading-heading)',
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      color: 'var(--white)',
      textWrap: 'pretty'
    }
  }, b.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, b.body)))))));
}
Object.assign(__ds_scope, { Expectations });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Expectations.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Hero.jsx
try { (() => {
function useKenBurns() {
  React.useEffect(() => {
    if (document.getElementById('wlb-kenburns-kf')) return;
    const s = document.createElement('style');
    s.id = 'wlb-kenburns-kf';
    s.textContent = '@keyframes wlb-kenburns{from{transform:scale(1) translateY(0)}to{transform:scale(1.08) translateY(-1.5%)}}';
    document.head.appendChild(s);
  }, []);
}

/* Hero = the 2026 save-the-date poster as the key visual, over the poster's own
   photographic bed. Text stack mirrors the poster's block order. */
const PILLARS = [{
  icon: 'user',
  label: 'Persona'
}, {
  icon: 'users',
  label: 'Liderazgo'
}, {
  icon: 'target',
  label: 'Impacto'
}, {
  icon: 'leaf',
  label: 'Futuro'
}];
function Hero({
  assetBase = '../../assets',
  onRegister,
  soldOut = false,
  style
}) {
  const poster = assetBase + '/poster-save-the-date-2026.png';
  useKenBurns();
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/imagery-venue-navy.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transformOrigin: '50% 40%',
      animation: 'wlb-kenburns 28s var(--ease-in-out) infinite alternate'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--page-gutter) 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 76,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(300px,440px)',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "10ma edici\xF3n")), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 90
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(64px,9vw,128px)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--track-display)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "WLB", /*#__PURE__*/React.createElement("br", null), "Forum")), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 180
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(20px,2.4vw,34px)',
      letterSpacing: 'var(--track-accent)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, "Work Life Balance")), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 260
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'clamp(15px,1.4vw,20px)',
      letterSpacing: 'var(--track-tagline)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      color: 'var(--text-body)'
    }
  }, "10 a\xF1os transformando la manera de vivir, trabajar y liderar")), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-3)',
      paddingLeft: 'var(--space-5)',
      borderLeft: '3px solid var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    rule: false,
    icon: "calendar",
    primary: "Jueves 5 de noviembre",
    secondary: "2026",
    iconSize: 30
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    rule: false,
    icon: "clock",
    primary: "15:00 \u2013 20:00",
    secondary: "Horario aproximado",
    iconSize: 30
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    rule: false,
    icon: "map-pin",
    primary: "Club Industrial",
    secondary: "Monterrey, Nuevo Le\xF3n",
    iconSize: 30
  }))), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 420
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-3)'
    }
  }, soldOut ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline",
    style: {
      padding: '14px 32px',
      fontSize: 'var(--size-small)'
    }
  }, "Registros agotados") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    onClick: onRegister
  }, "Save the date"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "secondary",
    href: "#teaser",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "play",
      size: 18,
      color: "currentColor"
    })
  }, "Ver teaser"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    variant: "ghost",
    href: poster,
    download: "WLB-Forum-2026-Save-the-date.png",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "download",
      size: 18,
      color: "currentColor"
    })
  }, "Descargar")))), /*#__PURE__*/React.createElement(__ds_scope.Reveal, {
    delay: 200,
    y: 32,
    style: {
      justifySelf: 'end',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: poster,
    alt: "Save the date \u2014 X WLB Forum 2026, El futuro se construye en equilibrio, jueves 5 de noviembre, Club Industrial",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      boxShadow: 'var(--shadow-overlay), var(--inset-hairline)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: 'var(--border-hairline)',
      background: 'rgba(31,44,99,.55)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))'
    }
  }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.icon,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-5) var(--space-5) var(--space-5) ' + (i === 0 ? '0' : 'var(--space-5)'),
      borderLeft: i === 0 ? 'none' : 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: p.icon,
    size: 36,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      color: 'var(--orange-500)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-small)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, p.label)))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Photos.jsx
try { (() => {
/* Photography published on the forum's own 2025 landing page (wlb.imefmty.com),
   linked from its CDN. Sizes were read at runtime; the frames could not be
   previewed here, so swap any tile that is not a photograph. Download and host
   locally for production. */
const CDN = 'https://d1zviajkun9gxg.cloudfront.net/user/prod/';
const PHOTOS = {
  // landscape
  wide: CDN + '2022/11/09/satma-de5d4143-4338-4780-8dad-4dbd0306838a.png',
  // 3346x1836
  room: CDN + '2025/10/01/satma-67424e87-a077-425d-a69c-a6a326fe0164.jpeg',
  // 2048x1365
  l1: CDN + '2021/11/02/satma-9ad11157-815e-4ab9-ae32-7ec8941bf962.png',
  // 1237x693
  l2: CDN + '2021/11/02/satma-9fccde9f-9843-4101-b161-1c4b92e12c26.png',
  // 1166x655
  l3: CDN + '2020/11/03/satma-50a46f65-4b66-4926-a3d1-5a7346d3fb2d.jpeg',
  // 680x453
  l4: CDN + '2020/11/03/satma-f0c119ba-3e68-4f87-8078-d95aef6b4503.jpeg',
  // 838x400
  l5: CDN + '2020/11/03/satma-14657bc0-6939-44fb-b9a1-daa2592b26be.jpeg',
  // 960x640
  // portrait
  p1: CDN + '2025/10/01/satma-2f6bcf08-6f29-4799-9ef4-37a2402c8c40.png',
  // 1351x1844
  p2: CDN + '2025/10/01/satma-5a9b7562-1034-4b71-adb8-c60996d25deb.png',
  // 1351x1844
  p3: CDN + '2024/10/16/satma-4e336689-04f2-4210-898f-28d0349a8b22.png',
  // 1728x2304
  p4: CDN + '2024/10/16/satma-a8185fef-7dcd-4531-b825-ddef7c4810b1.png',
  // 1728x2304
  p5: CDN + '2025/10/01/satma-09db704e-8ebf-482a-a19c-5c9f73195e01.png',
  // 1728x2304
  p6: CDN + '2025/10/01/satma-f3932f6b-7d6b-4492-a78c-7922acd67a04.png',
  // 1728x2304
  p7: CDN + '2021/11/10/satma-6d8bed45-208d-4f69-84d5-f2ecab712afe.jpeg',
  // 1080x1335
  p8: CDN + '2021/11/10/satma-7c784647-383a-42c9-a660-896e94fe36cf.jpeg',
  // 1080x1692
  p9: CDN + '2020/11/05/satma-25fd7996-0378-4411-b7ba-cca6c0c273e2.jpeg',
  // 1080x1539
  p10: CDN + '2020/11/11/satma-000e7696-a241-4371-848a-af46e5d69a00.jpeg',
  // 1074x1336
  // 2025 page artwork (placement on the page fixes what they are)
  key25: CDN + '2025/09/18/satma-90699364-6242-40a5-bee2-f52ac9ba072c.png',
  // hero key visual, IX
  prog25a: CDN + '2025/11/06/satma-91ffa9bc-ff11-4b79-a691-01b5bb26db78.png',
  // under "PROGRAMA DEL EVENTO"
  prog25b: CDN + '2025/11/06/satma-1e3daa8f-047b-4bdd-8390-fc71c8ba1a33.png',
  // under "PROGRAMA DEL EVENTO"
  // marks
  venueMark: CDN + '2025/10/01/satma-7939090f-0887-4d88-bf30-90ab4be08fa7.jpeg',
  // Club Industrial "Ci", 200x200
  sponsors25: CDN + '2025/11/06/satma-53f74ec6-dcbd-4b43-a122-dd788e05a5d5.png' // 2025 sponsor strip, 13612x4287
};

/* Chronology — only what the evidence supports.
   CONFIRMED: edition artwork whose printed weekday pins the year (a weekday +
   day-of-month falls in exactly one year): VI "Jueves 24 de noviembre" = 2022,
   VII "Miércoles 29 de noviembre" = 2023, IX "Jueves 6 Nov / 2025" = 2025; X is
   the 2026 save-the-date. Hence III = 2019 … X = 2026 with no gap.
   IDENTIFIED BY THE BRAND OWNER on screen: p1/p2 = VIII cartel + programa
   (2024); p3/p4 = VII cartel + programa (2023); the VI cartel + programa are
   the remaining 1 oct 2025 pair, p5/p6 (which is which: to confirm).
   UNCLASSIFIED: the remaining CDN images could not be viewed from here (the
   preview tooling cannot render cross-origin images). They are listed in
   ARCHIVE with their publish dates for the brand owner to assign. */
const EDITIONS = [{
  year: '2019',
  numeral: 'III',
  label: 'III edición',
  photos: [],
  artwork: [],
  note: 'Fotografía por asignar'
}, {
  year: '2020',
  numeral: 'IV',
  label: 'IV edición',
  photos: [],
  artwork: [],
  note: 'Fotografía por asignar'
}, {
  year: '2021',
  numeral: 'V',
  label: 'V edición',
  photos: [],
  artwork: [],
  note: 'Fotografía por asignar'
}, {
  year: '2022',
  numeral: 'VI',
  label: 'VI edición',
  printed: 'Jueves 24 de noviembre',
  photos: [],
  artwork: [{
    src: PHOTOS.p5,
    kind: 'Cartel'
  }, {
    src: PHOTOS.p6,
    kind: 'Programa'
  }],
  note: 'Jueves 24 de noviembre · EGADE Business School · 14:00 h · orden cartel/programa por confirmar'
}, {
  year: '2023',
  numeral: 'VII',
  label: 'VII edición',
  printed: 'Miércoles 29 de noviembre',
  photos: [],
  artwork: [{
    src: PHOTOS.p3,
    kind: 'Cartel'
  }, {
    src: PHOTOS.p4,
    kind: 'Programa'
  }],
  note: 'Miércoles 29 de noviembre · EGADE Business School · 14:00 h'
}, {
  year: '2024',
  numeral: 'VIII',
  label: 'VIII edición',
  photos: [],
  printed: 'Transformando la cultura del trabajo',
  artwork: [{
    src: PHOTOS.p1,
    kind: 'Cartel'
  }, {
    src: PHOTOS.p2,
    kind: 'Programa'
  }],
  note: 'Cartel y programa identificados; fecha y sede por confirmar'
}, {
  year: '2025',
  numeral: 'IX',
  label: 'IX edición',
  printed: 'Jueves 6 Nov / 2025',
  photos: [],
  artwork: [{
    src: 'ASSET:poster-ix-2025.png',
    kind: 'Cartel'
  }, {
    src: PHOTOS.key25,
    kind: 'Key visual'
  }, {
    src: PHOTOS.prog25a,
    kind: 'Programa'
  }, {
    src: PHOTOS.prog25b,
    kind: 'Programa'
  }],
  note: 'Jueves 6 de noviembre · Club Industrial, Gran Salón AB · 15:00 a 20:00'
}, {
  year: '2026',
  numeral: 'X',
  label: 'X edición',
  printed: 'Jueves 5 de noviembre',
  photos: [],
  artwork: [{
    src: 'ASSET:poster-save-the-date-2026.png',
    kind: 'Save the date'
  }],
  note: 'Jueves 5 de noviembre · Club Industrial · 15:00 a 20:00 aprox.',
  current: true
}];

/* Images from the 2025 gallery not yet assigned to an edition. `published` is
   the CDN upload date; dimensions hint at the kind (1080-wide = social post,
   ~16:9 small = screenshot of the virtual editions, 3:2 = camera photo). */
const ARCHIVE = [{
  src: PHOTOS.room,
  published: '1 oct 2025',
  dims: '2048×1365'
}, {
  src: PHOTOS.wide,
  published: '9 nov 2022',
  dims: '3346×1836'
}, {
  src: PHOTOS.p7,
  published: '10 nov 2021',
  dims: '1080×1335'
}, {
  src: PHOTOS.p8,
  published: '10 nov 2021',
  dims: '1080×1692'
}, {
  src: PHOTOS.l1,
  published: '2 nov 2021',
  dims: '1237×693'
}, {
  src: PHOTOS.l2,
  published: '2 nov 2021',
  dims: '1166×655'
}, {
  src: PHOTOS.p10,
  published: '11 nov 2020',
  dims: '1074×1336'
}, {
  src: PHOTOS.p9,
  published: '5 nov 2020',
  dims: '1080×1539'
}, {
  src: PHOTOS.l3,
  published: '3 nov 2020',
  dims: '680×453'
}, {
  src: PHOTOS.l4,
  published: '3 nov 2020',
  dims: '838×400'
}, {
  src: PHOTOS.l5,
  published: '3 nov 2020',
  dims: '960×640'
}];
Object.assign(__ds_scope, { PHOTOS, EDITIONS, ARCHIVE });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Photos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/CultureStatement.jsx
try { (() => {
/* "¡TRANSFORMANDO LA CULTURA EN EL TRABAJO!" — the manifesto band, all-caps
   over a full-bleed photograph, exactly as the forum sets it. */
function CultureStatement({
  photo = __ds_scope.PHOTOS.l5,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "cultura",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.6)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-navy)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      minHeight: '60vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(40px,5.4vw,84px)',
      lineHeight: .92,
      letterSpacing: 'var(--track-display)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "\xA1Transformando", /*#__PURE__*/React.createElement("br", null), "la cultura", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "en el trabajo!")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      borderLeft: '3px solid var(--orange-500)',
      paddingLeft: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'clamp(15px,1.4vw,19px)',
      letterSpacing: 'var(--track-tagline)',
      textTransform: 'uppercase',
      lineHeight: 1.7,
      color: 'var(--white)',
      textWrap: 'pretty'
    }
  }, "La sensibilidad de las necesidades de los dem\xE1s, la fortaleza, car\xE1cter para enfrentar los retos, y la congruencia entre lo que se dice y hace, son caracter\xEDsticas que nos hacen excelentes l\xEDderes."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, "Work Life Balance Forum \xB7 IMEF Grupo Monterrey"))));
}
Object.assign(__ds_scope, { CultureStatement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/CultureStatement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/DiezAnos.jsx
try { (() => {
/* The story block: what the forum is, in the forum's own words, framed by
   the tenth anniversary. The chronology strip is built from EDITIONS — each
   year shows that edition's first photograph and links to its gallery row. */

const thumb = (e, assetBase) => {
  const a = e.photos[0] || e.artwork[0] && e.artwork[0].src;
  return a ? a.startsWith('ASSET:') ? assetBase + '/' + a.slice(6) : a : null;
};
function DiezAnos({
  assetBase = '../../assets',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "foro",
    style: {
      background: 'var(--navy-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "El foro"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(120px,16vw,220px)',
      lineHeight: .8,
      letterSpacing: '-.03em',
      color: 'var(--orange-500)'
    }
  }, "10"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(28px,3.4vw,44px)',
      lineHeight: 1.05,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-display)',
      color: 'var(--white)',
      paddingBottom: '.12em'
    }
  }, "a\xF1os", /*#__PURE__*/React.createElement("br", null), "de foro")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontStyle: 'italic',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'clamp(20px,2.2vw,28px)',
      lineHeight: 1.35,
      color: 'var(--white)',
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, "Transformando la realidad, construyendo una sociedad m\xE1s consciente."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--leading-loose)',
      color: 'var(--text-body)',
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, "El Work Life Balance Forum es un foro para promover el cambio en las estructuras organizacionales y apoyar la igualdad de oportunidades para hombres y mujeres. Desde su primera edici\xF3n re\xFAne en Monterrey a directivos de finanzas, direcci\xF3n general y capital humano para hablar de c\xF3mo se vive, se trabaja y se lidera."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Cronolog\xEDa"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, __ds_scope.EDITIONS.map(e => /*#__PURE__*/React.createElement("li", {
    key: e.year
  }, /*#__PURE__*/React.createElement("a", {
    href: '#galeria-' + e.year,
    title: e.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: 'var(--navy-900)',
      boxShadow: e.current ? 'inset 0 0 0 2px var(--orange-500)' : 'var(--inset-hairline)'
    }
  }, thumb(e, assetBase) ? /*#__PURE__*/React.createElement("img", {
    src: thumb(e, assetBase),
    alt: 'WLB Forum ' + e.year,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top',
      filter: e.photos[0] ? 'saturate(.7)' : 'none'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-small)',
      letterSpacing: '.06em',
      color: 'var(--white)'
    }
  }, e.numeral)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-small)',
      letterSpacing: '.06em',
      color: e.current ? 'var(--orange-500)' : 'var(--white)'
    }
  }, e.numeral), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-muted)'
    }
  }, e.year)))))))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: '3 / 4',
      maxHeight: 640,
      overflow: 'hidden',
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/poster-ix-2025.png',
    alt: "IX Work Life Balance Forum, 2025",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect-bottom)',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 'var(--rule-weight)',
      background: 'var(--line-rule)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-display)',
      position: 'absolute',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "IX Work Life Balance Forum \xB7 2025"))));
}
Object.assign(__ds_scope, { DiezAnos });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/DiezAnos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Gallery.jsx
try { (() => {
/* "GALERÍA — Recordemos algunos momentos del Work-Life Balance Forum 2019,
   2020, 2021, 2023, 2024", laid out as a chronology: one row per edition,
   the year on the orange timeline, that edition's photographs beside it. */
const shown = __ds_scope.EDITIONS; // every edition gets a row, so each chronology anchor has a target

const resolve = (src, assetBase) => src.startsWith('ASSET:') ? assetBase + '/' + src.slice(6) : src;
function Gallery({
  assetBase = '../../assets',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "galeria",
    style: {
      background: 'var(--navy-700)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Galer\xEDa",
    title: "Recordemos algunos",
    accent: "momentos",
    lead: "Ordenada por el numeral impreso en cada cartel \u2014 de la III a la X \u2014 con el a\xF1o que ese cartel fija."
  }), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '3px solid var(--orange-500)'
    }
  }, shown.map((e, idx) => /*#__PURE__*/React.createElement("li", {
    key: e.year,
    id: 'galeria-' + e.year,
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'minmax(150px,200px) minmax(0,1fr)',
      gap: 'var(--space-7)',
      padding: 'var(--space-7) 0 var(--space-7) var(--space-7)',
      borderBottom: idx === shown.length - 1 ? 'none' : 'var(--border-hairline)',
      breakInside: 'avoid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -9,
      top: 'calc(var(--space-7) + 14px)',
      width: 15,
      height: 15,
      borderRadius: 'var(--radius-pill)',
      background: e.current ? 'var(--orange-500)' : 'var(--navy-700)',
      boxShadow: 'inset 0 0 0 3px var(--orange-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(48px,5.4vw,72px)',
      lineHeight: 1,
      letterSpacing: '-.01em',
      color: e.current ? 'var(--orange-500)' : 'var(--white)'
    }
  }, e.numeral), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, "Edici\xF3n \xB7 ", e.year), e.printed && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--size-small)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "En el cartel: \u201C", e.printed, "\u201D"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, e.note)), e.photos.length || e.artwork.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, e.photos.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))',
      gridAutoRows: 170,
      gridAutoFlow: 'dense',
      gap: 'var(--space-2)'
    }
  }, e.photos.map((src, i) => /*#__PURE__*/React.createElement("figure", {
    key: src,
    style: {
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--navy-800)',
      gridColumn: i === 0 ? 'span 2' : 'span 1',
      gridRow: i === 0 ? 'span 2' : 'span 1'
    },
    onMouseEnter: ev => {
      const im = ev.currentTarget.querySelector('img');
      if (im) {
        im.style.transform = 'scale(1.05)';
        im.style.filter = 'saturate(1)';
      }
    },
    onMouseLeave: ev => {
      const im = ev.currentTarget.querySelector('img');
      if (im) {
        im.style.transform = 'none';
        im.style.filter = 'saturate(.8)';
      }
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: 'WLB Forum ' + e.year,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.8)',
      transition: 'transform 600ms var(--ease-out), filter 600ms var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(31,44,99,0) 60%, rgba(31,44,99,.6) 100%)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 12,
      bottom: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-label)',
      color: 'var(--white)'
    }
  }, e.year)))) : null, e.artwork.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-4)'
    }
  }, e.artwork.map(a => /*#__PURE__*/React.createElement("figure", {
    key: a.src,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: 'clamp(140px, 22%, 200px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      background: 'var(--navy-900)',
      boxShadow: 'var(--inset-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: resolve(a.src, assetBase),
    alt: a.kind + ' — WLB Forum ' + e.year,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "file-image",
    size: 14,
    color: "var(--orange-500)"
  }), a.kind)))) : null, !e.photos.length && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, e.current ? 'Aquí van los momentos de la décima edición.' : 'Fotografía del evento por publicar.')) : /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-panel)',
      boxShadow: 'var(--inset-hairline)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "camera",
    size: 32,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-body)',
      textTransform: 'uppercase',
      letterSpacing: '.03em',
      color: 'var(--white)'
    }
  }, "Fotograf\xEDa por asignar desde el archivo."))))), /*#__PURE__*/React.createElement("div", {
    id: "galeria-archivo",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-6)',
      borderTop: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, "Archivo \xB7 por asignar a su edici\xF3n"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, "Im\xE1genes de la galer\xEDa 2025 con su fecha de publicaci\xF3n. Indica el a\xF1o de cada una y pasan a su fila.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))',
      gap: 'var(--space-2)'
    }
  }, __ds_scope.ARCHIVE.map(a => /*#__PURE__*/React.createElement("figure", {
    key: a.src,
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: '1 / 1',
      overflow: 'hidden',
      background: 'var(--navy-800)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: a.src,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.8)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(31,44,99,0) 55%, rgba(31,44,99,.75) 100%)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 10,
      right: 10,
      bottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-micro)',
      letterSpacing: '.04em',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("span", null, a.published), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, a.dims))))))));
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Program.jsx
try { (() => {
/* The detailed agenda is not confirmed yet. Only the approximate event window
   supplied for the 2026 edition is shown here. */
const EJE_ICON = {
  Persona: 'user',
  Liderazgo: 'users',
  Impacto: 'target',
  Futuro: 'leaf'
};
const SESSIONS = {
  am: [{
    time: '15:00',
    format: 'Inicio aproximado',
    title: 'Inicio del WLB Forum',
    eje: null,
    who: 'Agenda detallada por confirmar'
  }, {
    time: '15–20 h',
    format: 'Horario estimado',
    title: 'Conferencias, paneles y espacios de encuentro',
    eje: null,
    who: 'Programa completo próximamente'
  }, {
    time: '20:00',
    format: 'Cierre aproximado',
    title: 'Cierre del evento',
    eje: null
  }]
};
const SLOT_LABEL = {
  am: 'Horario estimado'
};
function Program({
  style,
  allSlots = false
}) {
  const slots = ['am'];
  return /*#__PURE__*/React.createElement("section", {
    id: "programa",
    style: {
      background: 'var(--navy-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(260px,.8fr) minmax(0,1.5fr)',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Programa",
    title: "Programa del",
    accent: "evento",
    lead: "Horario estimado de 15:00 a 20:00. La agenda detallada, los t\xEDtulos y los ponentes se publicar\xE1n conforme se confirmen."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, Object.entries(EJE_ICON).map(([k, ic]) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16,
    color: "var(--orange-500)"
  }), k))), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, "Agenda en preparaci\xF3n")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, slots.map(sl => /*#__PURE__*/React.createElement("div", {
    key: sl,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, allSlots && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, SLOT_LABEL[sl]), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '3px solid var(--orange-500)'
    }
  }, SESSIONS[sl].map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: s.time,
    style: {
      display: 'grid',
      gridTemplateColumns: '104px 1fr',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0 var(--space-5) var(--space-6)',
      position: 'relative',
      borderBottom: i === SESSIONS[sl].length - 1 ? 'none' : 'var(--border-hairline)',
      opacity: s.eje || s.who ? 1 : .72,
      breakInside: 'avoid'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: -8,
      top: 'calc(var(--space-5) + 8px)',
      width: 13,
      height: 13,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--navy-800)',
      boxShadow: 'inset 0 0 0 3px var(--orange-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      lineHeight: 1,
      color: 'var(--orange-500)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.format), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-subheading)',
      lineHeight: 'var(--leading-heading)',
      textTransform: 'uppercase',
      letterSpacing: '.01em',
      color: 'var(--white)'
    }
  }, s.title), (s.who || s.eje) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginTop: 4
    }
  }, s.who && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-body)'
    }
  }, s.who), s.eje && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-label)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: EJE_ICON[s.eje],
    size: 14,
    color: "var(--orange-500)"
  }), s.eje)))))))))));
}
Object.assign(__ds_scope, { Program });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Program.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Register.jsx
try { (() => {
function Register({
  assetBase = '../../assets',
  style
}) {
  const [form, setForm] = React.useState({
    nombre: '',
    correo: '',
    empresa: '',
    area: 'fin'
  });
  const [pase, setPase] = React.useState('socio');
  const [consent, setConsent] = React.useState(false);
  const [reminder, setReminder] = React.useState(true);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState('');
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  const submit = e => {
    e.preventDefault();
    if (!form.nombre || !form.correo.includes('@')) {
      setError('Revisa tu nombre y tu correo.');
      return;
    }
    if (!consent) {
      setError('Necesitamos tu consentimiento para continuar.');
      return;
    }
    setError('');
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "registro",
    style: {
      background: 'var(--navy-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(280px,1fr)',
      gap: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Registro",
    title: "Aparta tu",
    accent: "lugar",
    lead: "Cupo limitado. Te confirmamos por correo en menos de 24 horas."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Nombre",
    required: true,
    htmlFor: "r-n"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "r-n",
    value: form.nombre,
    onChange: set('nombre'),
    placeholder: "Nombre y apellido"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Correo corporativo",
    required: true,
    htmlFor: "r-c"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "r-c",
    type: "email",
    value: form.correo,
    onChange: set('correo'),
    placeholder: "nombre@empresa.com"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Empresa",
    htmlFor: "r-e"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "r-e",
    value: form.empresa,
    onChange: set('empresa'),
    placeholder: "Grupo Monterrey"
  })), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "\xC1rea",
    htmlFor: "r-a"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "r-a",
    value: form.area,
    onChange: set('area'),
    options: [{
      value: 'fin',
      label: 'Finanzas'
    }, {
      value: 'dir',
      label: 'Dirección general'
    }, {
      value: 'rh',
      label: 'Capital humano'
    }, {
      value: 'otro',
      label: 'Otra'
    }]
  }))), /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: "Tipo de pase"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Radio, {
    name: "pase",
    label: "Socio IMEF",
    description: "Incluye comida y materiales.",
    checked: pase === 'socio',
    onChange: () => setPase('socio')
  }), /*#__PURE__*/React.createElement(__ds_scope.Radio, {
    name: "pase",
    label: "Invitado",
    description: "Acceso general al foro.",
    checked: pase === 'invitado',
    onChange: () => setPase('invitado')
  }))), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Acepto recibir informaci\xF3n del IMEF Grupo Monterrey.",
    checked: consent,
    onChange: e => setConsent(e.target.checked)
  }), /*#__PURE__*/React.createElement(__ds_scope.Switch, {
    label: "Recordatorio 24 h antes del foro",
    checked: reminder,
    onChange: e => setReminder(e.target.checked)
  }), error && /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    tone: "danger",
    onDismiss: () => setError('')
  }, error), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    as: "button",
    onClick: submit
  }, "Confirmar registro"))), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    surface: "glass",
    accentTop: true,
    style: {
      alignSelf: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetBase + '/poster-save-the-date-2026.png',
    alt: "Save the date \u2014 X WLB Forum 2026, El futuro se construye en equilibrio",
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      boxShadow: 'var(--inset-hairline)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "10ma edici\xF3n"), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "calendar",
    primary: "Jueves 5 de noviembre",
    secondary: "2026",
    iconSize: 26
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "map-pin",
    primary: "Club Industrial",
    secondary: "San Pedro Garza Garc\xEDa, N.L.",
    iconSize: 26
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "clock",
    primary: "15:00 \u2013 20:00",
    secondary: "Horario aproximado",
    iconSize: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, "Informes: pquiroga@imefmty.com"))), /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: done,
    title: "Registro confirmado",
    onClose: () => setDone(false),
    footer: /*#__PURE__*/React.createElement(__ds_scope.Button, {
      onClick: () => setDone(false)
    }, "Listo")
  }, "Te enviamos el pase a ", form.correo || 'tu correo', ". Nos vemos el jueves 5 de noviembre en el Club Industrial."));
}
Object.assign(__ds_scope, { Register });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Register.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/SiteFooter.jsx
try { (() => {
const COLS = [{
  title: 'El foro',
  links: [['El foro', '#foro'], ['Cuatro ejes', '#ejes'], ['Programa', '#programa'], ['Esta edición', '#expectativas']]
}, {
  title: 'Asiste',
  links: [['Registro', '#registro'], ['Accesos', '#accesos'], ['Galería', '#galeria']]
}];
function SiteFooter({
  assetBase = '../../assets',
  onRegister,
  soldOut = false,
  style
}) {
  const link = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--size-small)',
    color: 'var(--text-body)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      borderTop: 'var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--page-gutter) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) repeat(2,minmax(0,.6fr)) minmax(0,1fr)',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 64,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-muted)',
      maxWidth: 360,
      textWrap: 'pretty'
    }
  }, "Un foro del IMEF Grupo Monterrey para promover el cambio en las estructuras organizacionales y la igualdad de oportunidades para hombres y mujeres.")), COLS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)',
      marginBottom: 4
    }
  }, c.title), c.links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: h,
    style: link
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--orange-500)',
      marginBottom: 4
    }
  }, "Informes"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:pquiroga@imefmty.com",
    style: link
  }, "pquiroga@imefmty.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...link,
      color: 'var(--text-muted)'
    }
  }, "Club Industrial \xB7 San Pedro Garza Garc\xEDa, N.L."), !soldOut && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onRegister,
    style: {
      alignSelf: 'flex-start',
      marginTop: 'var(--space-3)'
    },
    iconAfter: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-right",
      size: 14,
      color: "currentColor"
    })
  }, "Reg\xEDstrate aqu\xED"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--page-gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--navy-100)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Copyright 2026 | X Work Life Balance Forum \xB7 IMEF Grupo Monterrey"), /*#__PURE__*/React.createElement("span", null, "Monterrey, Nuevo Le\xF3n"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/SponsorCta.jsx
try { (() => {
/* "¿QUIERES SER PATROCINADOR?" — sponsorship contact. Navy ground; orange stays
   on the rule, the name and the CTA. */
function SponsorCta({
  name = 'Paola Quiroga',
  role = 'IMEF Grupo Monterrey',
  email = 'pquiroga@imefmty.com',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "patrocinio",
    style: {
      background: 'var(--navy-900)',
      borderTop: 'var(--border-rule)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,360px),1fr))',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, null, "Patrocinio"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(32px,4.4vw,56px)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--track-display)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "\xBFQuieres ser ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-500)'
    }
  }, "patrocinador?")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-lead)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)',
      maxWidth: 560,
      textWrap: 'pretty'
    }
  }, "Acompa\xF1a a la comunidad financiera de Monterrey en la d\xE9cima edici\xF3n del foro. Escr\xEDbenos y te compartimos las opciones de participaci\xF3n.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '3px solid var(--orange-500)',
      paddingLeft: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, role), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: 'mailto:' + email,
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "mail",
      size: 16,
      color: "currentColor"
    }),
    style: {
      alignSelf: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0
    }
  }, email))));
}
Object.assign(__ds_scope, { SponsorCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/SponsorCta.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/Sponsors.jsx
try { (() => {
/* "PATROCINADO POR:" — white band directly under the hero. Shows the sponsor
   strip published for the 2025 edition until the 2026 roster exists. */
function Sponsors({
  heading = 'Patrocinado por:',
  image = __ds_scope.PHOTOS.sponsors25,
  note = 'Patrocinadores IX edición (2025) — por actualizar.',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "patrocinadores",
    style: {
      background: 'var(--white)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-7) var(--page-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--navy-700)'
    }
  }, heading), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 'var(--rule-weight)',
      width: 'var(--rule-length)',
      background: 'var(--line-rule)'
    }
  })), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "Patrocinadores",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }), note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--grey-600)'
    }
  }, note)));
}
Object.assign(__ds_scope, { Sponsors });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/Sponsors.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/VenueAccess.jsx
try { (() => {
/* "INFORMACIÓN DE ACCESOS PRESENCIALES". Address is the Club Industrial address
   published on the 2025 page; confirm for 2026. */
const MAPS = 'https://www.google.com/maps/search/?api=1&query=Club+Industrial+Av.+Parte+Aguas+698+San+Pedro+Garza+Garc%C3%ADa';
function VenueAccess({
  assetBase = '../../assets',
  photo,
  style
}) {
  const venuePhoto = photo || assetBase + '/venue-foro-imef-2026-woman.jpg';
  return /*#__PURE__*/React.createElement("section", {
    id: "accesos",
    style: {
      background: 'var(--navy-800)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: 'var(--space-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Accesos",
    title: "Informaci\xF3n de accesos",
    accent: "presenciales",
    lead: "El foro se lleva a cabo en el Club Industrial. El horario estimado es de 15:00 a 20:00."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 'var(--radius-panel)',
      background: 'var(--white)',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: __ds_scope.PHOTOS.venueMark,
    alt: "Club Industrial",
    style: {
      width: 64,
      height: 64,
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-heading)',
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      color: 'var(--white)'
    }
  }, "Club Industrial"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, "Av. Parte Aguas 698, Los Arc\xE1ngeles, Zona Loma Larga Poniente,", /*#__PURE__*/React.createElement("br", null), "66266 San Pedro Garza Garc\xEDa, N.L."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "calendar",
    primary: "Jueves 5 de noviembre",
    secondary: "2026",
    iconSize: 26
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "clock",
    primary: "15:00 \u2013 20:00",
    secondary: "Horario aproximado",
    iconSize: 26
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "car",
    primary: "Estacionamiento",
    secondary: "Disponible en el club",
    iconSize: 26
  }), /*#__PURE__*/React.createElement(__ds_scope.DetailRow, {
    compact: true,
    icon: "shirt",
    primary: "Vestimenta",
    secondary: "Business casual",
    iconSize: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    href: MAPS,
    target: "_blank",
    rel: "noreferrer",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "map-pin",
      size: 16,
      color: "currentColor"
    })
  }, "C\xF3mo llegar"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    href: "#",
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "calendar-plus",
      size: 16,
      color: "currentColor"
    })
  }, "Agregar al calendario"))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: '4 / 5',
      maxHeight: 640,
      overflow: 'hidden',
      background: 'var(--navy-900)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: venuePhoto,
    alt: "Asistente conversando durante un foro de IMEF",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '40% center',
      filter: 'saturate(.75)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-protect-bottom)',
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 'var(--space-5)',
      bottom: 'var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 18,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'var(--size-micro)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--white)'
    }
  }, "San Pedro Garza Garc\xEDa, N.L.")))));
}
Object.assign(__ds_scope, { VenueAccess });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/VenueAccess.jsx", error: String((e && e.message) || e) }); }

// ui_kits/forum-site/VideoBlock.jsx
try { (() => {
/* Teaser block. Embeds the Vimeo teaser published on wlb.imefmty.com directly —
   the player is visible on load; the frame carries the orange rule. */
const TEASER = 'https://player.vimeo.com/video/1120290882?autoplay=0&mute=0&title=0&sidedock=0&byline=0&color=ff6b02';
function VideoBlock({
  src = TEASER,
  eyebrow = 'Teaser 2026',
  title = 'Así se vive el',
  accent = 'WLB Forum',
  caption,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "teaser",
    style: {
      background: 'var(--navy-900)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--page-gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: eyebrow,
    title: title,
    accent: accent,
    lead: "Un minuto para entender qu\xE9 pasa en el foro antes de que empiece."
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    href: "https://vimeo.com/1120290882",
    target: "_blank",
    rel: "noreferrer",
    iconAfter: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-up-right",
      size: 14,
      color: "currentColor"
    })
  }, "Ver en Vimeo")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16 / 9',
      overflow: 'hidden',
      background: 'var(--navy-800)',
      borderTop: 'var(--border-rule)',
      boxShadow: 'var(--shadow-overlay)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: src,
    title: "WLB Forum \u2014 teaser",
    loading: "lazy",
    allow: "autoplay; fullscreen; picture-in-picture; clipboard-write",
    allowFullScreen: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      border: 0
    }
  })), caption && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--text-style-body)',
      fontSize: 'var(--size-small)',
      color: 'var(--text-muted)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { TEASER, VideoBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/forum-site/VideoBlock.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.DetailRow = __ds_scope.DetailRow;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.PillarStat = __ds_scope.PillarStat;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.EmailBanner = __ds_scope.EmailBanner;

__ds_ns.Poster = __ds_scope.Poster;

__ds_ns.StoryCard = __ds_scope.StoryCard;

__ds_ns.CultureStatement = __ds_scope.CultureStatement;

__ds_ns.DiezAnos = __ds_scope.DiezAnos;

__ds_ns.Ejes = __ds_scope.Ejes;

__ds_ns.Expectations = __ds_scope.Expectations;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.PHOTOS = __ds_scope.PHOTOS;

__ds_ns.EDITIONS = __ds_scope.EDITIONS;

__ds_ns.ARCHIVE = __ds_scope.ARCHIVE;

__ds_ns.Program = __ds_scope.Program;

__ds_ns.Register = __ds_scope.Register;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SponsorCta = __ds_scope.SponsorCta;

__ds_ns.Sponsors = __ds_scope.Sponsors;

__ds_ns.VenueAccess = __ds_scope.VenueAccess;

__ds_ns.TEASER = __ds_scope.TEASER;

__ds_ns.VideoBlock = __ds_scope.VideoBlock;

})();
