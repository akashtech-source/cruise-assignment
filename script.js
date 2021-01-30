function handleTicketChange (ticket, isIncrease){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    
    ticketInput.value = ticketNewCount;

    let ticketTotal = 0;
    if(ticket == 'first'){
        ticketTotal = ticketNewCount * 150;
        
    }
    if(ticket == 'economy'){
        ticketTotal = ticketNewCount * 100;

    }
    calculateTotal();
}


    function calculateTotal(){
        const firstCount = getInputValue('first');
        const economyCount = getInputValue('economy');

        const totalPrice = firstCount * 150 + economyCount * 100;
        document.getElementById("total-price").innerText = '$' + totalPrice;

        const tax = totalPrice * 0.1;
        document.getElementById('tax-amount').innerText = '$' + tax;

        const grandTotal = totalPrice + tax;
        document.getElementById('grand-total').innerText = '$' + grandTotal;
    }
    
    function getInputValue(ticket){
        const ticketInput = document.getElementById(ticket + "-count");
        const ticketCount = parseInt(ticketInput.value);
        return ticketCount;
    }