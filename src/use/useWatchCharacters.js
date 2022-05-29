import { watch } from 'vue'

export function useWatchCharacters (valueToWatch, maxChars = 140) {
    watch(valueToWatch, (newValue) => {
        if (newValue.length === maxChars) {
            alert(`Only ${ maxChars } characters is allowed!`)
        }
    })
}
