import React from "react";
import s from './InitialComponent.module.css'

export const InitialComponent = () => {
    return (
        <div className={s.content}>
            <h1 className={s.title}>The first social network by Vadim</h1>
            {/*<ul className={s.aboutWorld}>*/}
            {/*    <li className={s.aboutList}>Year: 2022</li>*/}
            {/*    <li className={s.aboutList}>Country: Belarus</li>*/}
            {/*    <li className={s.aboutList}>School: IT-INCUBATOR</li>*/}
            {/*    <li className={s.aboutList}>Written on React</li>*/}
            {/*</ul>*/}
            <div className={s.aboutWorld}>
                <span className={s.aboutList}>Year: 2022</span>
                <span className={s.aboutList}>Country: Belarus</span>
                <span className={s.aboutList}>School: IT-INCUBATOR</span>
                <span className={s.aboutList}>Written on React</span>
            </div>
        </div>
    )
}