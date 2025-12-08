import React, {useRef, useLayoutEffect, useState} from 'react'
import gradImg from '../assets/graduation.png'
import schoolImg from '../assets/school.png'
import certImg from '../assets/certifications.png'
import trophyImg from '../assets/trophy.png'
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

    window.addEventListener('load', compute)
    return ()=>{
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', compute)
    }
  },[])

  
  React.useEffect(()=>{
    if(!('IntersectionObserver' in window)){
      itemRefs.current.forEach(el => el && el.classList.add('in-view'))
      return
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view')
          const idx = itemRefs.current.indexOf(entry.target)
          if(typeof idx === 'number' && idx >= 0){
            const markers = document.querySelectorAll('.timeline-marker')
            const m = markers[idx]
            if(m){
              m.classList.add('marker-active')
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
        {(() => {
          const getMarkerIcon = (idx) => {
            const item = items[idx]
            if(!item) return 'graduation'
            if(item.title && item.title.toLowerCase().includes('undergraduate')) return 'graduation'
            if(item.title && (item.title.toLowerCase().includes('secondary') || item.title.toLowerCase().includes('higher secondary') || item.title.toLowerCase().includes('sslc') || item.title.toLowerCase().includes('hsc'))) return 'school'
            if(item.title && item.title.toLowerCase().includes('achievements')) return 'trophy'
            if(item.title && item.title.toLowerCase().includes('certificat')) return 'certificate'
            return 'graduation'
          }
          const entries = items.map(it => ({side: it.side}))
          return markerTops.map((top, i) => {
            const side = entries[i] ? entries[i].side : 'center'
            const iconType = getMarkerIcon(i)
            return (
              <div key={`m-${i}`} className={`timeline-marker ${side}`} style={{top: top + 'px'}}>
                <svg className="marker-badge" viewBox="0 0 60 60" width="72" height="72" aria-hidden="true">
                  <circle cx="30" cy="30" r="28" fill="#ffffff" opacity="0.9" />
                  <circle cx="30" cy="30" r="25" fill="#2196F3" />
                  {iconType === 'school' && (
                    <image className="marker-icon" href={schoolImg} x="14" y="14" width="32" height="32" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
                  )}
                  {iconType === 'trophy' && (
                    <image className="marker-icon" href={trophyImg} x="14" y="14" width="32" height="32" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
                  )}
                  {iconType === 'certificate' && (
                    <image className="marker-icon" href={certImg} x="14" y="14" width="32" height="32" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
                  )}
                  {iconType === 'graduation' && (
                    <image className="marker-icon" href={gradImg} x="14" y="14" width="32" height="32" preserveAspectRatio="xMidYMid meet" aria-hidden="true" />
                  )}
                </svg>
              </div>
            )
          })
        })()}
      </div>
    </section>
  )
}