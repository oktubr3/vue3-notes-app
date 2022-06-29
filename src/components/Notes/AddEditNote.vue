<template>
    <div class="edit-note">
        <div class="mb-5">
            <div class="field">
                <div class="control">
                    <textarea
                        :value="modelValue"
                        @input="$emit('update:modelValue', $event.target.value)"
                        class="textarea"
                        :placeholder="placeholder"
                        ref="textareaRef"
                        :class="`is-${ textareaColor }`"
                        v-autofocus
                        maxlength="140"
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
import { vAutofocus } from '@/directives/vAutofocus';

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