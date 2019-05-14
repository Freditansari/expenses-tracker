import moment from 'moment';

export default (expenses, { searchText, sortBy, from, to }) => {
   
    return expenses.filter((expense) => {
      const expenseDateMoment = moment(expense.expenseDate);
      const startDateMatch = from ? from.isSameOrBefore(expenseDateMoment, 'day') : true;
      const endDateMatch = to ? to.isSameOrAfter(expenseDateMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(searchText.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.expenseDate < b.expenseDate ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };