#include<bits/stdc++.h>
using namespace std;

class edges                                 //defined a class edge to store weight,dest.,source
{
    public:
    int source;
    int destination;
    int weight;
};
bool compare(edges e1,edges e2)             //function created for comparing
{
    return e1.weight < e2.weight;
}
int find(int v,int *parent)
{
    if(parent[v] == v)
    {
        return v;
    }
    return find(parent[v],parent);
}
void kruskal(edges *input,int e,int n)           //creating function for implementation of kruskal
{
   sort(input,input+e,compare);
   edges *output = new edges[n-1];
   int *parent = new int[n];
   for(int i=0;i < n;i++)
   {
       parent[i] = i;
   }
   int count = 0;
   int i=0;
   while(count != n-1)
   {
       edges current = input[i];
       
       int source = find(current.source,parent);
       int desti = find(current.destination,parent);
       
       if(source != desti)
       {
           output[count] = current;
           count++;
           parent[source] = desti;
       }
       i++;
   }
   for(int i=0;i < n-1;i++)
   {
       if(output[i].source < output[i].destination){
       cout << output[i].source <<" "<<output[i].destination <<" "<<output[i].weight <<endl;
       }
       else
       {
           cout << output[i].destination <<" "<<output[i].source <<" "<<output[i].weight <<endl;
       }
   }
}
int main()                    //driver code
{
    int n,e;
    cin >> n >> e;
    edges *input = new edges[e];
    for(int i=0;i < e;i++)
    {
        int s,d,w;
        cin >> s >> d >> w;
        input[i].source = s;
        input[i].destination = d;
        input[i].weight = w;
    }
    kruskal(input,e,n);
}
