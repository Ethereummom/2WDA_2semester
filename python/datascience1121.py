import pandas as pd
red_df = pd.read_csv('C:/Users/sanghee/Desktop/develop/2wda_2semester/2WDA_2semester/python/winequality-red.csv',sep=';',header=0,engine='python')
white_df = pd.read_csv('C:/Users/sanghee/Desktop/develop/2wda_2semester/2WDA_2semester/python/winequality-white.csv',sep=';',header=0,engine='python')

red_df.to_csv('C:/Users/sanghee/Desktop/develop/2wda_2semester/2WDA_2semester/python/winequality-red3.csv',index=False)
white_df.to_csv('C:/Users/sanghee/Desktop/develop/2wda_2semester/2WDA_2semester/python/winequality-white3.csv',index=False)

#red_df.head()
#red_df.insert(0,column='type',value='red')
#red_df.head()
#red_df.shape
