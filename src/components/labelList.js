import React, { useEffect, useState } from "react";
import { OutlineBtn, BgBtn } from "./btn";
import NewlineText from "./newlineText";
import { workList } from "../utils/constant";
import useMobile from "../hook/useMobile";
import ReadMoreText from "./readMore";

import { PreviewSvg, GithubSvg } from "./img";
const BtnBaseStyle =
  "normal-case  btn btn-sm btn-ghost  rounded-full px-6 py-0 border";
const SelectedStyle = "bg-black hover:text-black hover:border-black text-white";
const unSelectedStyle =
  "bg-gray-400 hover:text-white hover:bg-black hover:border-black text-black";
const UnSelectChip = ({ text }) => {
  return (
    <button className={`ml-4 ${BtnBaseStyle} ${unSelectedStyle}`}>
      {text}
    </button>
  );
};

const PreviewGithubBtnRow = ({ previewLink, githubLink }) => {
  return (
    <div className="flex flex-col my-4 md:flex-row">
      <div className="w-full mb-5 mr-4 ">
        {previewLink && (
          <BgBtn
            onClick={() => {
              window.open(previewLink);
            }}
            text={
              <div className="flex items-center">
                <PreviewSvg />

                <div className="ml-2">Preview</div>
              </div>
            }
            isTight={true}
          />
        )}
      </div>
      {githubLink && (
        <div className="w-d">
          <OutlineBtn
            onClick={() => {
              window.open(githubLink);
            }}
            text={
              <div className="flex items-center">
                <GithubSvg />
                <div className="ml-2">Github repo</div>
              </div>
            }
            isTight={true}
          />
        </div>
      )}
    </div>
  );
};
const WorkCard = ({ work, callback }) => {
  const { image, title, labels, desc, previewLink, githubLink } = work;
  let bgColor = work.bgColor ?? "bg-white";
  const noPreviewGithub = previewLink == null && githubLink == null;
  let descMaxHeight = !noPreviewGithub
    ? "max-h-[120px]"
    : "max-h-[280px] md:max-h-[180px]";
  const isMobile = useMobile();
  return (
    <div className="card card-bordered border-white w-[330px] md:w-[380px] h-[640px] shadow-lg mr-4 mb-4">
      <img alt={title} src={image} className={`h-1/3 md:h-1/2 object-contain ${bgColor}`} />
      <div className="card-body">
        <h2 className="card-title">
          <NewlineText text={title} />
        </h2>
        <div className="flex mb-2">
          <div className="carousel ">
            {labels.map((label, index) => {
              return (
                <div
                  onClick={() => {
                    callback(label);
                  }}
                  className="carousel-item"
                  key={index}
                >
                  <UnSelectChip text={label} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={`text-left grow overflow-y-auto ${descMaxHeight}`}>
          <ReadMoreText
            text={desc}
            textLimit={noPreviewGithub ? (isMobile ? 220 : 150) : null}
          />
        </div>
        <PreviewGithubBtnRow
          previewLink={previewLink}
          githubLink={githubLink}
        />
      </div>
    </div>
  );
};

const LabelList = () => {
  const [filter, setFilter] = useState("all");
  const [labelList, setLabelList] = useState([]);
  const isMobile = useMobile();
  const Chip = ({ text, isSelect, label }) => {
    isSelect = label.toLowerCase() === filter.toLowerCase();
    return (
      <button
        onClick={() => {
          setFilter(label.toLowerCase());
        }}
        className={`mr-4 ${BtnBaseStyle} ${
          isSelect ?? false ? SelectedStyle : unSelectedStyle
        }`}
      >
        {text}
      </button>
    );
  };
  const filterByLabel = (list) => {
    if (filter == "all") return list;
    return list.filter((item) => {
      const lowercased = item.labels.map((name) => name.toLowerCase());
      return lowercased.includes(filter.toLowerCase());
    });
  };
  const getLabelList = (list) => {
    let result = [];
    list.map((item) => {
      return item.labels.map((label) => {
        let targets = result.filter(
          (item) => item["label"].toLowerCase() === label.toLowerCase()
        );
        if (targets.length > 0) {
          targets[0].count++;
          /* vendors contains the element we're looking for */
        } else {
          result.push({ label: label, count: 1 });
        }
      });
    });

    result.sort((a, b) => b.count - a.count);
    result = [{ label: "All", count: list.length }, ...result];
    setLabelList(result);
  };
  useEffect(() => {
    getLabelList(workList);
  }, []);
  return (
    <div className="flex flex-col">
      <div className="mt-8">
        <div className="flex flex-wrap ">
          {labelList.map((item, index) => {
            const { label, count } = item;
            return (
              <div className="mb-2 carousel-item" key={index}>
                <Chip text={`${label} (${count})`} label={label} />
              </div>
            );
          })}
        </div>
      </div>
      {isMobile ? (
        <div className="flex my-4 carousel">
          {filterByLabel(workList).map((work, index) => {
            return (
              <div className="carousel-item" key={index}>
                <WorkCard
                  callback={(label) => {
                    setFilter(label.toLowerCase());
                  }}
                  work={work}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-wrap my-4">
          {filterByLabel(workList).map((work, index) => {
            return (
              <WorkCard
                callback={(label) => {
                  setFilter(label.toLowerCase());
                }}
                work={work}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default LabelList;
