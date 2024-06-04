import eel 
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from Genlogin import Genlogin
from dp.dp import dp_session,User
@eel.expose
def Pfatfrom():
    gen = Genlogin("")
    profileID = gen.getProfiles(0,10)["profiles"][0]["id"]
    wsEndpoint = gen.runProfile(profileID)["wsEndpoint"].replace("ws://","").split('/')[0]

    chrome_driver = 'chromedriver.exe'
    chrome_options = Options()
    chrome_options.add_experimental_option("debuggerAddress", wsEndpoint)

    service = Service(executable_path=r'chromedriver.exe')
    driver = webdriver.Chrome(service=service, options=chrome_options)

@eel.expose
def run():
    global browser
    browser=webdriver.Chrome()
    
    
@eel.expose
def open_url():
   browser.get("https://chromewebstore.google.com/detail/captcha-solver-auto-captc/pgojnojmmhpofjgdmaebadhbocahppod")
       
@eel.expose
def close_tab():
   browser.close()
   
@eel.expose
def go_back():
   browser.back()  
   
@eel.expose
def reload():
   browser.refresh()

@eel.expose
def click_element():
    browser.find_element(By.XPATH,"/html/body/c-wiz/div/div/main/div/section[6]/div/section/div/div[2]/div/div[2]/div[1]/div/a").click()  
  
@eel.expose
def full_chrome():
    browser.maximize_window()
    time.sleep(20)
 
@eel.expose
def saveNodes():
    
    post = User(name="34235") 
    dp_session.add(post)
    dp_session.commit()
    dp_session.close()
 
    

    
@eel.expose
def currentUser():
    user=dp_session.query(User).filter_by(id=1).first()
    
    eel.current_user(user.as_dict())
    


if __name__=='__main__':
    eel.init("src", ['.tsx','.ts','.jsx','.js','.html'])
   
    eel.start({"port":3000},host="localhost",port=8000)
    
    