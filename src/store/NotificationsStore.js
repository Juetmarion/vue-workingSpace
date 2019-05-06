class NotificationsStore{
    constructor(){
        this.state = {
            count: 4
        }
    }
    increment(){
        this.state.count++
    }
    decrement(){
        this.state.count--
    }

}

export default new NotificationsStore()