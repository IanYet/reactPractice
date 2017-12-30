const a = {
    oriName: {data: 'hh'},
    get name() { return this.oriName},
    set name(val) {
        // this.oriName.push[val]
        console.log(val)
    }
}

a.name.sayHi = () => {
    console.log(a.oriName)
}

// a.name.sayHi()
// a.oriName.sayHi()

const DataSource = {
    nameStore: [],
    propStore: [],
    get name() { return this.nameStore},
    set name(val) { 
        this.nameStore.push(val)
        this.handle()
    },
    get prop() { return this.propStore},
    set prop(val) { this.propStore.push(val)}
}

DataSource.addChangeListener = (handle) => {
    DataSource.handle = handle 
}

// DataSource.dispatchChange = () => {
//     // console.log(DataSource);
//     return DataSource.handle()
// }

DataSource.addChangeListener(()=>console.log(DataSource.name))
// DataSource.dispatchChange()

DataSource.name = "oh"