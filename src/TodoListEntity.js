const list = {
	list: undefined,
	set sList(list) {
		this.list = list;
	},
	get gList() {
		return this.list;
	}
};

export default list;