function autocomplete(search, items, maxResult) {
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );
    
    filteredItems.sort((a, b) => {
        const indexA = a.toLowerCase().indexOf(search.toLowerCase());
        const indexB = b.toLowerCase().indexOf(search.toLowerCase());
        if (indexA < indexB) {
          return -1; // a มาก่อน b
        }
        if (indexA > indexB) {
          return 1; // b มาก่อน a
        }
        return 0; // เท่ากัน
    });

    return filteredItems.slice(0, maxResult);
}

const result = autocomplete("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2);
console.log(result);
