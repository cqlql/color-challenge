import { ref } from 'vue'

export default function useColorGame() {
  const level = ref(1)
  return {
    level,
  }
}
