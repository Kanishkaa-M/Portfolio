import React, {useRef, useLayoutEffect, useState} from 'react'
import './education.css'

function TimelineItem({forwardRef, side = 'left', title, institute, period, details, delay}){
  const style = delay ? {transitionDelay: `${delay}ms`} : undefined
  return (
    <div className={`timeline-item ${side} hidden`} ref={forwardRef} style={style}>
      <div className="content">
        <h3>{title}</h3>
        <p className="institute">{institute}</p>
        {period && <p className="period">{period}</p>}
        {details && details.map((d, i) => <p key={i} className="detail">{d}</p>)}
      </div>
    </div>
  )
}

export default function Education(){
  const items = [
    {side: 'left', title: 'Undergraduate — B.E. Computer Science', institute: 'K.S.R College of Engineering', period: '2024 - 2028', details: ['CGPA: 8.7']},
    {side: 'right', title: 'Higher Secondary (HSC)', institute: 'Kongunadu Matric Higher Secondary School', period: '2023 - 2024', details: ['Percentage: 82.3%']},
    {side: 'left', title: 'Secondary (SSLC)', institute: 'Kongunadu Matric Higher Secondary School', period: '2021 - 2022', details: ['Percentage: 89.4%']},
    {side: 'right', title: 'Achievements', list: [
      "Presented project paper at TechAura'25 (IEEE).",
      'Won/participated in college Hackathons and Debugging events.',
      'Active participant in national-level web development workshop (Oct 2025).'
    ]}, 
    {side: 'left', title: 'Certifications', list: [
      'NPTEL — Internet of Things (IoT) — Score: 90',
      'How To CSS — Codekaro',
      'GDG Campus Solution Challenge — Certificate of Achievement (2025)'
    ]}
  ]

  // place achievements on the right and certifications on the left


  const itemRefs = useRef([])
  itemRefs.current = []
  const addToRefs = (el) => { if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el) }
  const [markerTops, setMarkerTops] = useState([])
  const timelineRef = useRef(null)

  useLayoutEffect(()=>{
    const compute = () => {
      const timelineRect = timelineRef.current ? timelineRef.current.getBoundingClientRect() : {top:0}
      const tops = itemRefs.current.map(el => {
        const rect = el.getBoundingClientRect()
        return (rect.top - timelineRect.top) + rect.height / 2
      })
      setMarkerTops(tops)
    }
    compute()
    const onResize = () => compute()
    window.addEventListener('resize', onResize)
    // also recompute after fonts/images load
    window.addEventListener('load', compute)
    return ()=>{
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', compute)
    }
  },[])

  // IntersectionObserver to add `in-view` class when items scroll into view
  React.useEffect(()=>{
    if(!('IntersectionObserver' in window)){
      // If unsupported, just reveal everything
      itemRefs.current.forEach(el => el && el.classList.add('in-view'))
      return
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view')
          // find index of this element in refs and pulse the corresponding marker
          const idx = itemRefs.current.indexOf(entry.target)
          if(typeof idx === 'number' && idx >= 0){
            const markers = document.querySelectorAll('.timeline-marker')
            const m = markers[idx]
            if(m){
              m.classList.add('marker-active')
              // optional: remove pulse class after animation so it can re-trigger if needed
              setTimeout(()=> m.classList.remove('marker-active'), 1200)
            }
          }
          obs.unobserve(entry.target)
        }
      })
    }, {threshold: 0.15})

    itemRefs.current.forEach(el => {
      if(el){
        obs.observe(el)
      }
    })

    return ()=> obs.disconnect()
  },[markerTops])

  return (
    <section className="education-section">
      <h2 className="section-title">🎓 Education & Credentials</h2>

      <div className="timeline" ref={timelineRef}>
        {/* build a combined entries array so refs and markers line up */}
        {/** entries: each entry has {type: 'item'|'center', side, data} **/}
        {
          (() => {
            const entries = items.map(it => ({type: it.list ? 'block' : 'item', side: it.side, data: it}))

            return entries.map((entry, idx) => {
              const delay = idx * 120
              if(entry.type === 'item'){
                const d = entry.data
                return <TimelineItem key={idx} forwardRef={addToRefs} side={entry.side} title={d.title} institute={d.institute} period={d.period} details={d.details} delay={delay} />
              }

              return (
                <div className={`timeline-item ${entry.side} hidden`} key={idx} ref={addToRefs} style={{transitionDelay: `${delay}ms`}}>
                  <div className="content">
                    <h3>{entry.data.title}</h3>
                    <ul className="achievements">{entry.data.list.map((l, j) => <li key={j}>{l}</li>)}</ul>
                  </div>
                </div>
              )
            })
          })()
        }

        {/* markers placed on the center line — positions computed from refs. Use entries to know side */}
        {(() => {
          const entries = items.map(it => ({side: it.side}))
          return markerTops.map((top, i) => {
            const side = entries[i] ? entries[i].side : 'center'
            return (
              <div key={`m-${i}`} className={`timeline-marker ${side}`} style={{top: top + 'px'}}>
                {side === 'center' ? (
                  <svg className="marker-icon center-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path fill="#00f0ff" d="M12 2.5l1.9 4.3 4.8.7-3.5 3.4.8 4.8L12 14.9l-4 2.8.8-4.8L5.3 7.5l4.8-.7L12 2.5z" />
                  </svg>
                ) : (
                  <svg className={`marker-icon arrow-icon ${side}`} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" fill="#002229" opacity="0.85" />
                    <path fill="#00f0ff" d="M8 12l6-4v8z" />
                  </svg>
                )}
              </div>
            )
          })
        })()}
      </div>
    </section>
  )
}