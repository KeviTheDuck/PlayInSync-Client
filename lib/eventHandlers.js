"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let CLIENTHASH;
let fileName;
const connectHandler = () => __awaiter(void 0, void 0, void 0, function* () {
    urlInput.disabled = true;
    connectButton.disabled = true;
    if (urlInput.value) {
        // valid url
        const response = yield connectHandlerFetcher();
        if (response['response']['state'] === 'Success') {
            // When Response is recieved from server.
            urlInput.classList.remove('failure');
            connectButton.classList.remove('failure');
            urlInput.classList.add('success');
            connectButton.classList.add('success');
            CLIENTHASH = response['clientHash'];
            if (response['response']['file'] !== 'None') {
                fileName = response['response']['file'];
                file_text.innerText += ` ${fileName}`;
            }
            file_div.style.display = 'block';
        }
        else if (response['response']['state'] === 'Failure') {
            // Server didnt respond.
            urlInput.classList.add('failure');
            connectButton.classList.add('failure');
            urlInput.disabled = false;
            connectButton.disabled = false;
            alert('Please enter a valid Server URL first.');
        }
    }
    else {
        // invalid url
        urlInput.classList.add('failure');
        connectButton.classList.add('failure');
        urlInput.disabled = false;
        connectButton.disabled = false;
        alert('Please enter a valid Server URL first.');
    }
});
const playHandler = (e) => {
    e.preventDefault();
};