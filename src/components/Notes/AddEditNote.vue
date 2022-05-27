<template>
    <div class="edit-note">
        <div class="mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        v-model="modelValue"
                        @input="$emit('update:modelValue', modelValue)"
                        class="textarea"
                        :placeholder="placeholder"
                        ref="textareaRef"
                        :class="`is-${ textareaColor }`"
                    />
                </div>
            </div>
            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <slot name="buttons" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

/*
Props
*/
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    textareaColor: {
        type: String,
        default: 'danger'
    },
    placeholder: {
        type: String,
        default: 'Add a new note'
    }
})

/*
Emits
*/

const emit = defineEmits(['update:modelValue'])

/*
Focus Textarea
*/
const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})

</script>