<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Estatística</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Número de Apontamentos</td> 
                    <td>{{ cabulasStore.totalApontamentos }}</td>
                </tr>
                <tr>
                    <td>Número de carateres</td>
                    <td>{{ cabulasStore.totalCarateres }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>

    import { useCabulasStore } from '@/stores/cabulasStore';
    const cabulasStore = useCabulasStore();
</script>