function init() {
    let form = document.getElementById("searchForm");
    let errorBox = document.getElementById("error");
    let searchTextExists;
    let checkedRadioExists;
    let searchOptions = {
        'google': 'https://google.com/search',
        'bing': 'https://bing.com/search',
        'duckduckgo': 'https://duckduckgo.com/',
        'ask': 'https://ask.com/web'
    };

    function printError() {
        errorBox.innerHTML = "";
        let invalidSearchText = "<span> Error: Please input text for us to search for. </span>";
        let invalidSelectRadio = "<span> Error: Please select a search engine for us to search. </span>";
        searchTextExists ? null : errorBox.innerHTML += invalidSearchText;
        checkedRadioExists ? null : errorBox.innerHTML += invalidSelectRadio;
    }

    function validateInput() {
        searchTextExists = document.querySelector("input[name=q]").value;
        checkedRadioExists = document.querySelector("input[name=engine]:checked");
        return searchTextExists && checkedRadioExists;
    }

    form.addEventListener("submit", function(event) {
        if (validateInput()) {
            let formAction = searchOptions[document.querySelector("input[name=engine]:checked").value];
            form.setAttribute("action", formAction);
        }
        else {
            printError();
            event.preventDefault();
        }
    });
}


window.onload = init;
