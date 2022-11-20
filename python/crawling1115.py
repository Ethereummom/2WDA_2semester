from selenium import webdriver
from bs4 import BeautifulSoup
wd=webdriver.Chrome('C:/Users/sanghee/Desktop/develop/2wda_2semester/2WDA_2semester/python/WebDriver/chromedriver.exe')

wd.get("https://www.coffeebeankorea.com/store/store.asp")

wd.execute_script("storePop2(1)")
html=wd.page_source

soupCB1 = BeautifulSoup(html,'html.parser')
print(soupCB1.prettify())
