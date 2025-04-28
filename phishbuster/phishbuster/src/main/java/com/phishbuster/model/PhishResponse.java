package com.phishbuster.model;

public class PhishResponse {
    private boolean phishing;

    public PhishResponse(boolean phishing){
        this.phishing = phishing;
    }

    public boolean isPhishing() {
        return phishing;
    }

    public void setPhishing(boolean phishing){
        this.phishing = phishing;
    }
}
