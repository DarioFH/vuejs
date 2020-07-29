let app = new Vue({
    el: "#app",
    data:{
        nomeInput:"",
        telefoneInput:"",
        editNomeInput:"",
        editTelefoneInput:"",
        ref_arr_temp:0,
        lista:[]
    },
    methods: {
        add:function(){
            if(this.nomeInput.length > 0 && this.telefoneInput.length > 0)
            {
                this.lista.push({
                                nome: this.nomeInput,
                                telefone: this.telefoneInput
                                });
                this.nomeInput = '';
                this.telefoneInput = '';
                
            }
        },
        del:function(event){
            this.lista.splice(event,1);
        },
        showEdit:function(event){
            let user = this.lista[event];
            this.editNomeInput = user.nome;
            this.editTelefoneInput = user.telefone;
            this.ref_arr_temp = event;

        },
        edit:function()
        {
            if(this.editNomeInput.length > 0 && this.editTelefoneInput.length > 0)
            {
                Vue.set(this.lista, this.ref_arr_temp, {nome: this.editNomeInput, telefone: this.editTelefoneInput});
                this.$refs.closeModal.click();
            }
        }

    },

});