from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time


def run_website_predict():
    driver = webdriver.Chrome()

    results = []

    driver.get("http://localhost:3000/login")

    login_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div[1]/form/div[1]/input"
    )
    login_field.clear()
    login_field.send_keys("Krafi604@gmail.com")
    results.append(login_field.get_attribute("value"))

    password_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div[1]/form/div[2]/input"
    )
    password_field.clear()
    password_field.send_keys("14km77So9x!")
    results.append(password_field.get_attribute("value"))

    login_button = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div[1]/form/div[3]/div/button"
    ).click()

    time.sleep(2)

    predict_button = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/div[3]/div[2]/a/button"
    ).click()

    time.sleep(2)

    # Param Channel View Count
    input1_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[1]/input"
    )
    input1_field.clear()
    input1_field.send_keys("1")
    results.append(input1_field.get_attribute("value"))
    # Param Channel Elapsed Time
    input2_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[2]/input"
    )
    input2_field.clear()
    input2_field.send_keys("2")
    results.append(input2_field.get_attribute("value"))
    # Param Channel Video Count
    input3_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[3]/input"
    )
    input3_field.clear()
    input3_field.send_keys("3")
    results.append(input3_field.get_attribute("value"))
    # Param Channel Subscriber Count
    input4_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[4]/input"
    )
    input4_field.clear()
    input4_field.send_keys("4")
    results.append(input4_field.get_attribute("value"))
    # Param Channel Comment Count
    input5_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[5]/input"
    )
    input5_field.clear()
    input5_field.send_keys("5")
    results.append(input5_field.get_attribute("value"))
    # Param Video Category Id (combo box)
    select_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[6]/select"
    )
    select_category = Select(select_field)
    select_category.select_by_value("10")
    results.append(select_field.get_attribute("value"))
    # Param Likes
    input7_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[7]/input"
    )
    input7_field.clear()
    input7_field.send_keys("7")
    results.append(input7_field.get_attribute("value"))
    # Param Dislikes
    input8_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[8]/input"
    )
    input8_field.clear()
    input8_field.send_keys("8")
    results.append(input8_field.get_attribute("value"))
    # Param Comments
    input9_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[9]/input"
    )
    input9_field.clear()
    input9_field.send_keys("9")
    results.append(input9_field.get_attribute("value"))
    # Param Elapsed Time
    input10_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[10]/input"
    )
    input10_field.clear()
    input10_field.send_keys("10")
    results.append(input10_field.get_attribute("value"))
    # Param Video Published (Date)
    input11_field = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[11]/input"
    )
    input11_field.clear()
    input11_field.send_keys("11", "05", "2022")
    results.append(input11_field.get_attribute("value"))
    time.sleep(1)

    check_predict_button = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/form/div[12]/button"
    ).click()

    time.sleep(2)

    predicted_value = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div/div/p"
    ).text
    results.append(predicted_value)

    time.sleep(2)

    profile = driver.find_element(
        By.XPATH, "/html/body/div[2]/header/nav/ul/li[1]/a"
    ).click()
    time.sleep(2)
    user_nickname = driver.find_element(
        By.XPATH, "/html/body/div[2]/main/div[1]/h2"
    ).text
    results.append(user_nickname)

    user_email = driver.find_element(By.XPATH, "/html/body/div[2]/main/div[1]/p").text
    results.append(user_email)

    user_history_predict = driver.find_element(
        By.CSS_SELECTOR, "#root > main > div > div > div:last-child > div:last-child"
    )

    predict_from_form = user_history_predict.find_element(By.CSS_SELECTOR, "p").text

    results.append(predict_from_form)
    driver.quit()

    return results
