from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time


def run_website_register():
    driver = webdriver.Chrome()

    results = []

    driver.get("http://localhost:3000/")

    login_button_header = driver.find_element(
        By.XPATH, "/html/body/div[2]/header/nav/ul/li/a"
    ).click()

    time.sleep(2)

    register_button = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div[2]/a/button"
    ).click()

    time.sleep(2)

    username = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[1]/input"
    )
    username.clear()
    username.send_keys("Ryszawy")
    results.append(username.get_attribute("value"))

    email = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[2]/input"
    )
    email.clear()
    email.send_keys("Krafi604@gmail.com")
    results.append(email.get_attribute("value"))

    password = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[3]/input"
    )
    password.clear()
    password.send_keys("14km77So9x!")
    results.append(password.get_attribute("value"))

    password_second = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[4]/input"
    )
    password_second.clear()
    password_second.send_keys("14km77So9x!")

    profile_url = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[5]/input"
    )
    profile_url.clear()
    profile_url.send_keys(
        "https://pastform.pl/1119-thickbox_default/szafa-ubraniowa-vintage.jpg"
    )

    register_user = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[6]/button"
    ).click()

    driver.quit()

    return results
