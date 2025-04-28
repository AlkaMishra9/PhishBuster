package com.phishbuster.controller;

import com.phishbuster.model.UrlRequest;  //  Import your UrlRequest class
import com.phishbuster.model.PhishResponse;  //  Import your PhishResponse class
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/url")
@CrossOrigin(origins = "*") // allow frontend to talk to backend
public class UrlCheckController {

    @PostMapping("/check")
    public PhishResponse checkUrl(@RequestBody UrlRequest request) {  
        String url = request.getUrl().toLowerCase(); // convert to lowercase for easy checking

        // List of suspicious keywords
        List<String> suspiciousKeywords = Arrays.asList(
                "login", "account", "bank", "paypal", "free-money", "secure-verification");

        boolean isPhishing = suspiciousKeywords.stream().anyMatch(url::contains);

        return new PhishResponse(isPhishing);  
    }
}
