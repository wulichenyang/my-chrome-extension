import { Button } from "antd";
import { map } from "lodash";
import React from "react";

const direction = ["东", "南", "西", "北"];

const Optimize: React.FC = () => {
  const handleClickOptimize = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs?.[0]?.id ?? 0 },
        func: () => {
          // 获取用户设置的偏好
          chrome.storage.sync.get(["towardDirection"], (data) => {
            const { towardDirection } = data;

            const houseListUl = document.querySelector(".sellListContent");
            const houseList = houseListUl?.querySelectorAll("li.clear");

            try {
              const houseJsonList: any = [];
              (houseList as NodeListOf<HTMLElement>)?.forEach(
                (house: HTMLElement) => {
                  const title = (house.querySelector("div.title") as any)
                    ?.innerText;
                  const address = house.querySelector("div.address");
                  const position = (address?.querySelector("div.flood") as any)
                    ?.innerText;
                  const houseInfo = (
                    address?.querySelector("div.houseInfo") as any
                  )?.innerText;
                  const followInfo = (
                    address?.querySelector("div.followInfo") as any
                  )?.innerText;
                  const tagList = (
                    address?.querySelector("div.tag") as any
                  )?.innerText?.split("\n");
                  const totalPrice = (
                    address?.querySelector("div.priceInfo > .totalPrice") as any
                  ).innerText
                    ?.split("\n")
                    ?.join("");
                  const unitPrice = (
                    address?.querySelector("div.priceInfo > .unitPrice") as any
                  ).innerText
                    ?.split("\n")
                    ?.join("");

                  houseJsonList.push({
                    title,
                    position,
                    houseInfo,
                    followInfo,
                    tagList,
                    totalPrice,
                    unitPrice,
                  });
                }
              );
              console.log("+++houseJsonList", houseJsonList as any);
            } catch (e) {
              console.error("+++", e);
            }
          });
        },
      });
    });
  };

  return (
    <div>
      <h1>Optimize Page</h1>

      <Button id="optimize" onClick={handleClickOptimize}>
        优化页面
      </Button>
    </div>
  );
};

export default Optimize;
