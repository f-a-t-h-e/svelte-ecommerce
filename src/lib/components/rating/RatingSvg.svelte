<script lang="ts">
	export let stroke = 'gold';
	export let fill = 'gold';
	export let fillout = 'transparent';
	export let id = (Math.random() + 1).toString(36).substring(7);
	export let offset = 50;
	export let size = 20;
</script>

<svg
	viewBox="0 0 20 20"
	xmlns="http://www.w3.org/2000/svg"
	height={size}
	width={size}
	{stroke}
	fill="url('#{id}')"
	stroke-width="0.5">
	<defs>
		<linearGradient {id}>
			<stop offset="{offset}%" stop-color={fill} />
			<stop offset="{offset}%" stop-color={fillout} />
		</linearGradient>
	</defs>
	<path
	class=""
		d="m0.92492,7.86094l6.93279,0l2.14229,-6.92222l2.14229,6.92222l6.93279,0l-5.60873,4.27811l2.14239,6.92222l-5.60874,-4.27823l-5.60874,4.27823l2.14239,-6.92222l-5.60874,-4.27811l0.00001,0z"
	/>
</svg>
