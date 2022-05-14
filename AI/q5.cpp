#include<stdio.h>
void printLatin(int n)
{
 
    int k = n+1;
    for (int i=1; i<=n; i++)
    {
        
        int temp = k;
        while (temp <= n)
        {
            printf("%d ", temp);
            temp++;
        }
 
     
        for (int j=1; j<k; j++)
            printf("%d ", j);
 
        k--;
        printf("\n");
    }
}
 

int main(void)
{
    int n = 5;
    printLatin(n);
 
    return 0;
}