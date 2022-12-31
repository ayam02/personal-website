import { Navbar } from "@blueprintjs/core"
import { ALIGN_LEFT, BUTTON } from "@blueprintjs/core/lib/esm/common/classes"
import { Button, Icon, Menu } from "@blueprintjs/core/lib/esm/components"
import { IconNames } from "@blueprintjs/icons"
import styles from "./header.module.css"

export const Header = () =>{
    return(
        <Navbar>
            <div className={styles.banner}>
             <h1 className={styles.header}>Aya Madi</h1>
            <Button className={styles.button}>
                    <Icon className={styles.icon} icon="menu"></Icon>
                </Button>    
                </div> 
        </Navbar>
    )
       
}
