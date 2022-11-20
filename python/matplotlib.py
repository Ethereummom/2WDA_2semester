import os
import sys
import urllib.request
import datetime
import time
import json
import pandas as pd
import matplotlib as matlib

df = pd.read_csv('death.csv')
print(type(df))
print(df)