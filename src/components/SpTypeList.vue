<template>
	<div>
		<SpH3>List of {{ type }} items {{ module && `in module ${module}` }}</SpH3>
		<div v-for="instance in instanceList" :key="instance.id" class="item">
			<div v-for="(value, key) in instance" :key="key" class="item__field">
				<div class="item__field__key">{{ key }}:</div>
				<div class="item__field__value">
					{{ value }}
				</div>
			</div>
		</div>
		<div v-if="instanceList.length < 1" class="card__empty">
			There are no {{ type }} items yet. Create one using the form.
		</div>
	</div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;531;600;700;800&display=swap');

.container {
	font-family: 'Inter';
}
.item {
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
	padding: 1rem;
	border-radius: 0.5rem;
	overflow: hidden;
}
.item__field {
	display: grid;
	line-height: 1.5;
	grid-template-columns: 15% 1fr;
	grid-template-rows: 1fr;
	word-break: break-all;
}
.item__field__key {
	color: rgba(0, 0, 0, 0.25);
	word-break: keep-all;
	overflow: hidden;
}
.card__empty {
	margin-bottom: 1rem;
	border: 1px dashed rgba(0, 0, 0, 0.1);
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	border-radius: 8px;
	color: rgba(0, 0, 0, 0.25);
	text-align: center;
	min-height: 8rem;
}
</style>

<script>
import { mapGetters } from 'vuex'
import SpH3 from './SpH3'

export default {
	components: {
		SpH3
	},
	props: {
		type: {
			type: String
		},
		module: {
			type: String
		}
	},
	computed: {
		...mapGetters('cosmos/env', ['appEnv']),
		instanceList() {
			return (
				this.$store.state.cosmos.module.data[`${this.module}/${this.type}`] ||
				[]
			)
		}
	},
	watch: {
		appEnv: {
			handler() {
				if (this.appEnv.API) {
					this.$store.dispatch('cosmos/module/entityFetch', {
						type: this.type,
						module: this.module
					})
				}
			},
			deep: true
		}
	}
}
</script>
