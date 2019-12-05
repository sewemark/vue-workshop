import axios from 'axios'
import { ref, watch } from '@vue/composition-api'

export default function (url, delay) {
    const data = ref({})
    const isPending = ref(true)
    const error = ref(null)

    const getDogs = async () => {
        try {
            isPending.value = true;
            const request = await axios.get(url.value);
            data.value = request.data;
            isPending.value = false;
            error.value = null;
        } catch (err) {
            error.value = "Cannot get dogs";
        }
    }

    watch(url, () => {
        setTimeout(getDogs, delay)
    })

    return { data, isPending, error, refresh:getDogs }
}

