<script lang="ts">
    export let rows:[string, string, string][] = [];
</script>
<table class="w-full text-left">
    <thead class="">
        <tr class="border-b-[1px] border-b-c-1-e">
            <th scope="col" class="s6 text-c-1-a">Vitamins</th>
            <th scope="col" class="s6 text-c-1-a">Quantity</th>
            <th scope="col" class="s6 text-c-1-a">% DV</th>
        </tr>
    </thead>
    <tbody class="[&>tr>*]:body [&>tr>*]:text-c-1-b">
        {#each rows as row}
            <tr>
                <th scope="row">{row[0]}</th>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="postcss">
    table {
        table-layout: fixed;
    }
    thead tr {
        @apply h-[2rem];
    }
    tbody tr{
        @apply h-[2.5rem];
    }
</style>