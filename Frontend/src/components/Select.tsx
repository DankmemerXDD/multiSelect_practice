import styles from "../styles/select.module.css" 
                    

type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    value?: SelectOption 
    onChange: (value: SelectOption | undefined) => void
    options: SelectOption[] 
}

export function Select({value, onChange, options}: SelectProps){
    return (
        <div tabIndex={0} className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-button"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={styles.options}>
            {options.map(option => (
                <li key={option.label} className={styles.option}>{option.label}</li>
            ))}
        </ul>
        </div>
    )
}