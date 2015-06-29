//
//  ViewController.swift
//  FoodTruck
//
//  Created by Reece Long on 6/29/15.
//  Copyright (c) 2015 Reece Long. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    
    @IBOutlet var foodTruckView: UIView!
    @IBOutlet weak var statusLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let url = NSURL(string: "http://sparcfoodtruck.herokuapp.com/api/foodTruck")
        let request = NSURLRequest(URL: url!)
        NSURLConnection.sendAsynchronousRequest(request, queue: NSOperationQueue.mainQueue()) { (response, data, error) -> Void in
            let allDataAsDictionary = NSJSONSerialization.JSONObjectWithData(data, options:
                NSJSONReadingOptions.AllowFragments, error:nil) as! [String : AnyObject]
            let status = allDataAsDictionary["status"] as! String
            if (status == "NOT_HERE") {
                self.foodTruckView.backgroundColor = UIColor.whiteColor()
                self.statusLabel.text = "The food truck is not here."
            }
            else if (status == "HERE") {
                self.foodTruckView.backgroundColor = UIColor.greenColor()
                self.statusLabel.text = "The food truck is here!"
            }
            else if (status == "CANCELLED") {
                self.foodTruckView.backgroundColor = UIColor.redColor()
                self.statusLabel.text = "The food truck cancelled. :("
            }
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

