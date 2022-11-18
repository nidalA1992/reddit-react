import React from 'react';
import styles from './cardmenu.css';
import { Dropdown } from '../../Dropdown';
import { MenuButton } from '../../MenuButton';
import { ButtonList } from '../../ButtonList';
import { EColor, EIcon } from '../../enums';

export function CardMenu() {
  return (

    <div className={styles.menu}>
      <Dropdown button={ <MenuButton className={styles.menuButton} icon={EIcon.menu} sizes={{iS: 20}}/>} >
        
        <div className={styles.dropdown}>
          <ButtonList postId='1234'/>
          <MenuButton className={styles.closeButton} text='Закрыть' color={EColor.grey66} />
        </div>
        
      </Dropdown>
    </div>

  );
}
