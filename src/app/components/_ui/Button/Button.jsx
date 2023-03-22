"use client";
import { useLayoutEffect, useRef, useState } from 'react';
import styles from './Button.module.scss';

export function Button(props) {
  
    return (
     <button className={styles.btn}>
        <span>{props.name}</span>
     </button>
    )
}