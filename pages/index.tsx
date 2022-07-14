import React from "react";
import Image from "../node_modules/next/image";

import st from "../styles/index.module.scss"

export default function index() {

  const womanText: Array<string> = ['Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.',
    'По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки. ',
    'По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания.']

  const babyText: Array<string> = [`Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
    терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
    дегенерации при прогрессировании заболевания`, `Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
    движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
    осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
    в отношении наличия СМА.`]


  return (
    <div className={st.page}>
      <div className={st.wrapper}>
        <h1>А вдруг СМА?</h1>
        <p className={st.who}>Выберите, кто Ваш пациент:</p>
        <div className={st.content}>
          <div className={st.block}>
            <p className={st.about}>Взрослый</p>
            <img src="/woman.png" alt="woman" width={300} height={300} className={st.image} />
            {womanText.map((text, index) => (
              <div key={index} className={st.text1}>{text}</div>
            ))}
          </div>
          <div className={st.block}>
            <p className={st.about}>Ребенок</p>
            <img src="/baby.png" alt="baby" width={300} height={300} className={st.image} />
            {babyText.reverse().map((text, index) => (
              <div key={index} className={st.text2} >{text}</div>
            ))}
          </div>
        </div>
        <p className={st.info}>Сообщает ли один из ваших пациентов о следующих симптомах? <a className={st.help}>(нажмите на любую иконку и узнайте больше)</a></p>
        <div>
          <div className={st.footer}><img src="/womanFooter.png" className={st.imageFooter} />
          </div>
          <div className={st.circ}>
            <ul className='advantages-circle'>
              <li  className={st.advantages_circle__element}>
                <img src='/icons/3.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Нарушения жевания и глотания</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/4.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Дыхательная недостаточность/ респираторная дисфункция</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/5.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Неспособность бегать, изменение походки</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/6.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Контрактура суставов</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/7.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Вывих бедра</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/8.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Утомляемость</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/1.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Сколиоз</div>
              </li>
              <li  className={st.advantages_circle__element}> 
                <img src='/icons/2.png' alt="zxc" />
                <img className="plus" src="/icons/plus.png" alt="plus" />
                <div id={st.vsplitie}>Ограниченная способность поднимать руки 
и переносить предметы</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
