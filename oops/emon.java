public class emon {

    public static void main(String[] args) {
        int orderId = 789;
        double totalAmount = 99.99;
        boolean isPaid = false;
        boolean isVIPMember = true;
        boolean hasLoyaltyPoints = true;

        if (isPaid || isVIPMember || (hasLoyaltyPoints && totalAmount > 100)) {
            System.out.println("Order #" + orderId + " qualifies for a discount!");
        } else if (!isPaid && totalAmount > 50) {
            System.out.println("Order #" + orderId + " is pending payment.");
        } else {
            System.out.println("Order #" + orderId + " is being reviewed.");
        }
    }
}