export function calculateDaysFromNow(dateString: string): number {
    // Extract day, month, and year from the input date string
    const [day, month, year] = dateString.split("/").map(Number);
  
    // Convert the input date to a Date object (Note: months are 0-indexed in JavaScript Date)
    const inputDate: Date = new Date(year, month - 1, day);
  
    // Get today's date
    const todayDate: Date = new Date();
  
    // Calculate the difference in days
    const daysDifference: number = Math.floor(
      (inputDate.getTime() - todayDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  
    // Ensure the result is positive
    return Math.abs(daysDifference);
  }
  